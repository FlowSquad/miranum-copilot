import { DocumentationPrompt, Prompt } from "./types";

export function isInstanceOfPrompt(object: any): object is Prompt {
    return "text" in object;
}

export function isInstanceOfDocumentationPrompt(
    object: any,
): object is DocumentationPrompt {
    return "template" in object && "format" in object;
}
