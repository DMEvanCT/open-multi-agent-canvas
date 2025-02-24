"use client";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import {
  ActivityIcon,
  Loader2,
  RotateCw,
  SendIcon,
  Square,
} from "lucide-react";
import { FC } from "react";

export const ChatWindow: FC = () => {
  return (
    <CopilotChat
      className="h-full flex flex-col"
      instructions="You are a multi-agent chat system with specialized agents:
          - Travel Agent: Expert in planning trips, itineraries and travel recommendations
          - Research Agent: You are a helpful research assistant, set to help the user with conduction and writing a research paper on any topic.
          - AI Research Agent: You are a helpful research assistant, set to help the user with conduction and writing a research paper on any topic.
          - Email Agent: Assists with drafting and composing professional emails"
      labels={{
        placeholder: "Type your message here...",
        regenerateResponse: "Try another response",
      }}
      icons={{
        sendIcon: (
          <SendIcon className="w-4 h-4 hover:scale-110 transition-transform" />
        ),
        activityIcon: <ActivityIcon className="w-4 h-4 animate-pulse" />,
        spinnerIcon: <Loader2 className="w-4 h-4 animate-spin" />,
        stopIcon: (
          <Square className="w-4 h-4 hover:text-red-500 transition-colors" />
        ),
        regenerateIcon: (
          <RotateCw className="w-4 h-4 hover:rotate-180 transition-transform duration-300" />
        ),
      }}
    />
  );
};
