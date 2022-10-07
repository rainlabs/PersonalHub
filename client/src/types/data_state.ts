import { LoadingState } from "./loading_state.enum";

export interface DataState<Type> {
    loading: LoadingState,
    data: Type
}