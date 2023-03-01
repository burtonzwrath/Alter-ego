export type AuthFormTypes = {
    setPassword:(value: string | ((prevVar: string) => string)) => void;
    setUserName:(value: string | ((prevVar: string) => string)) => void;
    setHideForm:(value: boolean | ((prevVar: boolean) => boolean)) => void;
    userName:string | number,
    password:number | string,
}