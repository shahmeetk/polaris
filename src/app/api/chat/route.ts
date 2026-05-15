import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({
        error: "API Key missing. Please configure OPENAI_API_KEY in Vercel environment variables.",
      }),
      { status: 401 }
    );
  }

  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are the Polaris Institutional Assistant. 
    You help qualified professional investors understand Polaris Variable Capital Company (VCC).
    Polaris is based in Mauritius and focuses on quantitative, systematic, and algorithmic trading strategies.
    Be professional, concise, and institutional in tone. 
    Do not provide specific financial advice. 
    If asked about performance, state that detailed performance data is available in the secure Data Room for qualified investors.`,
    messages,
  });

  return result.toTextStreamResponse();
}
