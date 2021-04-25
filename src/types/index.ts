
export interface Credential {
    name: String,
    secret: String,
}

export interface State {
    credentials: [Credential]
};
