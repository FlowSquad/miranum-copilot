import {
    BpmnFile,
    DefaultPrompt,
    FileExtension,
    PromptCreation,
    Template,
} from "../model";

export interface GetPromptsOutPort {
    getPrompts(): Promise<Map<string, DefaultPrompt[]>>;
}

export interface GetBpmnFilesOutPort {
    getBpmnFiles(): Promise<BpmnFile[]>;
}

export interface GetTemplatesOutPort {
    getTemplates(): Promise<Map<string, Template[]>>;
}

export interface CreateOrShowUiOutPort {
    createOrShowWebview(): string;
}

export interface ReadFileOutPort {
    readFile(path: string): Promise<string>;
}

export interface CreateFileOutPort {
    createFile(
        fileName: string,
        fileExtension: FileExtension,
        fileContent: string,
        workspaceName?: string,
    ): Promise<boolean>;
}

export interface ShowMessageOutPort {
    showInformationMessage(message: string): Promise<boolean>;

    showErrorMessage(message: string): Promise<boolean>;
}

export interface PostMessageOutPort {
    sendBpmnFiles(bpmnFiles: BpmnFile[]): Promise<boolean>;

    sendPrompts(prompts: Map<string, DefaultPrompt[]>): Promise<boolean>;

    // sendTemplates(templates: Map<string, Template[]>): Promise<boolean>;

    sendAiResponse(response: string): Promise<boolean>;
}

export interface GetAiResponseOutPort {
    getAiResponse(prompt: PromptCreation): Promise<string>;

    getProcessDocumentation(prompt: PromptCreation, fileFormat: string): Promise<string>;

    getForm(prompt: PromptCreation): Promise<string>;
}

export interface CreateDocumentationDialogOutPort {
    getBpmnFile(bpmnFiles: BpmnFile[]): Promise<BpmnFile>;

    getFormat(): Promise<string>;

    getTemplate(templates: Template[]): Promise<string>;

    getName(): Promise<string>;
}
