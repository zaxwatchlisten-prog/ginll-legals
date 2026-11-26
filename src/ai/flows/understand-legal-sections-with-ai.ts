'use server';
/**
 * @fileOverview An AI Clause Interpreter that summarizes complex legal language into simple terms.
 *
 * - understandLegalSectionsWithAI - A function that handles the interpretation of legal sections.
 * - UnderstandLegalSectionsWithAIInput - The input type for the understandLegalSectionsWithAI function.
 * - UnderstandLegalSectionsWithAIOutput - The return type for the understandLegalSectionsWithAI function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const UnderstandLegalSectionsWithAIInputSchema = z.object({
  sectionTitle: z.string().describe('The title of the legal section to be interpreted (e.g., "Intellectual Property Rights").'),
  legalText: z.string().describe('The full legal text of the section to be summarized.'),
});
export type UnderstandLegalSectionsWithAIInput = z.infer<typeof UnderstandLegalSectionsWithAIInputSchema>;

const UnderstandLegalSectionsWithAIOutputSchema = z.object({
  summary: z.string().describe('A simple, easy-to-understand summary of the provided legal text.'),
});
export type UnderstandLegalSectionsWithAIOutput = z.infer<typeof UnderstandLegalSectionsWithAIOutputSchema>;

export async function understandLegalSectionsWithAI(input: UnderstandLegalSectionsWithAIInput): Promise<UnderstandLegalSectionsWithAIOutput> {
  return understandLegalSectionsWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'understandLegalSectionsWithAIPrompt',
  input: { schema: UnderstandLegalSectionsWithAIInputSchema },
  output: { schema: UnderstandLegalSectionsWithAIOutputSchema },
  prompt: `You are an AI Clause Interpreter. Your task is to summarize complex legal language into simple, easy-to-understand terms for a general audience.
Focus on explaining the user's rights and obligations clearly, without legal jargon.

Here is the legal section you need to interpret:

Section Title: {{{sectionTitle}}}
Legal Text:
"""
{{{legalText}}}
"""

Please provide a summary that highlights key points, rights, and obligations in plain language.`,
});

const understandLegalSectionsWithAIFlow = ai.defineFlow(
  {
    name: 'understandLegalSectionsWithAIFlow',
    inputSchema: UnderstandLegalSectionsWithAIInputSchema,
    outputSchema: UnderstandLegalSectionsWithAIOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to get summary from the AI model.");
    }
    return output;
  }
);
