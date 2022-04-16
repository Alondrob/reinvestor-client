import { createSelector } from 'reselect'

export const selectIsLoading = createSelector(
    state => state.isLoading
)