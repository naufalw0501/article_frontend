class MiniAlertEntity {
    level?: number;
    duration?: number;
    messages: string;
    title?: string;
    constructor(object: {
        level?: number;
        duration?: number;
        messages: string;
        title?: string;
    }) {
        this.messages = object.messages ?? '';
        this.level = object.level ?? 1;
        this.title = object.title ?? '';
        this.duration = object.duration ?? 1;
    }
}

class MiniAlertConfirmationEntity {
    alertQuestion: string;
    onClickYes: (() => void) | null;
    constructor(object: {
        alertQuestion: string;
        onClickYes: (() => void) | null;
    }) {
        this.alertQuestion = object.alertQuestion ?? '';
        this.onClickYes = object.onClickYes ?? null;
    }
}

class ConfirmationAlertEntity {
    alertQuestion: string;
    onClickYes: (() => void) | null;
    constructor(object: {
        alertQuestion: string;
        onClickYes: (() => void) | null;
    }) {
        this.alertQuestion = object.alertQuestion ?? '';
        this.onClickYes = object.onClickYes ?? null;
    }
}

export { MiniAlertEntity, ConfirmationAlertEntity, MiniAlertConfirmationEntity };