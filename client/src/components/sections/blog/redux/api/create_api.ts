import { createApi, buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react'

const appCreateApi = buildCreateApi(
    coreModule(),
    reactHooksModule({ unstable__sideEffectsInRender: true })
)

export default import.meta.env.SSR ? appCreateApi : createApi