export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never
}
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
}

export type Api = {
    __typename?: 'API'
    id: Scalars['Float']['output']
    isActive: Scalars['Boolean']['output']
    name: Scalars['String']['output']
}

export type ChangeColumnInput = {
    default?: InputMaybe<Scalars['String']['input']>
    generationStrategy?: InputMaybe<Scalars['String']['input']>
    isGenerated?: InputMaybe<Scalars['Boolean']['input']>
    isNullable?: InputMaybe<Scalars['Boolean']['input']>
    isPrimary?: InputMaybe<Scalars['Boolean']['input']>
    isUnique?: InputMaybe<Scalars['Boolean']['input']>
    length?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    newName?: InputMaybe<Scalars['String']['input']>
    type?: InputMaybe<Scalars['String']['input']>
}

export type ChangePasswordByRecoverCodeInput = {
    code: Scalars['Float']['input']
    password: Scalars['String']['input']
}

export type ChangeTableInput = {
    api: Scalars['String']['input']
    changeColumns?: InputMaybe<Array<ChangeColumnInput>>
    deleteForeignKeys?: InputMaybe<Array<Scalars['String']['input']>>
    dropColumns?: InputMaybe<Array<Scalars['String']['input']>>
    newColumns?: InputMaybe<Array<NewColumnInput>>
    newForeignKeys?: InputMaybe<Array<ForeignKeyInput>>
    tableName: Scalars['String']['input']
}

export type ColumnForeignKeyInput = {
    onDelete?: InputMaybe<Scalars['String']['input']>
    referencedColumnNames: Array<Scalars['String']['input']>
    referencedTableName: Scalars['String']['input']
}

export type CreateApiInput = {
    name: Scalars['String']['input']
}

export type CreateTableInput = {
    api: Scalars['String']['input']
    columns: Array<NewColumnInput>
    tableName: Scalars['String']['input']
}

export type DropApiInput = {
    name: Scalars['String']['input']
}

export type DropTableInput = {
    api: Scalars['String']['input']
    tableName: Scalars['String']['input']
}

export type ForeignKeyInput = {
    columnNames: Array<Scalars['String']['input']>
    onDelete?: InputMaybe<Scalars['String']['input']>
    referencedColumnNames: Array<Scalars['String']['input']>
    referencedTableName: Scalars['String']['input']
}

export type GetTableInput = {
    api: Scalars['String']['input']
    tableName: Scalars['String']['input']
}

export type GetTableResponseObjectType = {
    __typename?: 'GetTableResponseObjectType'
    checks: Array<TableCheckObjectType>
    columns: Array<TableColumnObjectType>
    exclusions: Array<TableExclusionObjectType>
    foreignKeys: Array<TableForeignKeyObjectType>
    indices: Array<TableIndexObjectType>
    name: Scalars['String']['output']
    uniques: Array<TableUniqueObjectType>
}

export type GetTablesResponseObjectType = {
    __typename?: 'GetTablesResponseObjectType'
    name: Scalars['String']['output']
}

export type Mutation = {
    __typename?: 'Mutation'
    changePasswordByRecoverCode: Scalars['Boolean']['output']
    changeTable: Scalars['Boolean']['output']
    createApi: Api
    createTable: Scalars['Boolean']['output']
    dropApi: Scalars['Boolean']['output']
    dropTable: Scalars['Boolean']['output']
    recover: Scalars['Boolean']['output']
    refresh: TokensObjectType
    signConfirm: TokensObjectType
    signIn: TokensObjectType
    signUp: User
}

export type MutationChangePasswordByRecoverCodeArgs = {
    data: ChangePasswordByRecoverCodeInput
}

export type MutationChangeTableArgs = {
    data: ChangeTableInput
}

export type MutationCreateApiArgs = {
    data: CreateApiInput
}

export type MutationCreateTableArgs = {
    data: CreateTableInput
}

export type MutationDropApiArgs = {
    data: DropApiInput
}

export type MutationDropTableArgs = {
    data: DropTableInput
}

export type MutationRecoverArgs = {
    data: RecoverInput
}

export type MutationRefreshArgs = {
    refreshToken: Scalars['String']['input']
}

export type MutationSignConfirmArgs = {
    data: SignConfirmInput
}

export type MutationSignInArgs = {
    data: SignInInput
}

export type MutationSignUpArgs = {
    data: SignUpInput
}

export type NewColumnInput = {
    default?: InputMaybe<Scalars['String']['input']>
    foreignKey?: InputMaybe<ColumnForeignKeyInput>
    generationStrategy?: InputMaybe<Scalars['String']['input']>
    isGenerated?: InputMaybe<Scalars['Boolean']['input']>
    isNullable?: InputMaybe<Scalars['Boolean']['input']>
    isPrimary?: InputMaybe<Scalars['Boolean']['input']>
    isUnique?: InputMaybe<Scalars['Boolean']['input']>
    length?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
    type: Scalars['String']['input']
}

export type Query = {
    __typename?: 'Query'
    getApis: Array<Api>
    getCurrentUser: TokenPayloadObjectType
    getTable: GetTableResponseObjectType
    getTables: Array<GetTablesResponseObjectType>
}

export type QueryGetTableArgs = {
    data: GetTableInput
}

export type QueryGetTablesArgs = {
    api: Scalars['String']['input']
}

export type RecoverInput = {
    email: Scalars['String']['input']
}

export type SignConfirmInput = {
    code: Scalars['Float']['input']
    email: Scalars['String']['input']
}

export type SignInInput = {
    email: Scalars['String']['input']
    password: Scalars['String']['input']
}

export type SignUpInput = {
    email: Scalars['String']['input']
    password: Scalars['String']['input']
}

export type TableCheckObjectType = {
    __typename?: 'TableCheckObjectType'
    columnNames: Array<Scalars['String']['output']>
    expression: Scalars['String']['output']
    name: Scalars['String']['output']
}

export type TableColumnObjectType = {
    __typename?: 'TableColumnObjectType'
    asExpression?: Maybe<Scalars['String']['output']>
    charset?: Maybe<Scalars['String']['output']>
    collation?: Maybe<Scalars['String']['output']>
    comment?: Maybe<Scalars['String']['output']>
    default?: Maybe<Scalars['String']['output']>
    enum?: Maybe<Array<Scalars['String']['output']>>
    enumName?: Maybe<Scalars['String']['output']>
    generatedIdentity?: Maybe<Scalars['String']['output']>
    generatedType?: Maybe<Scalars['String']['output']>
    generationStrategy?: Maybe<Scalars['String']['output']>
    isArray: Scalars['Boolean']['output']
    isGenerated: Scalars['Boolean']['output']
    isNullable: Scalars['Boolean']['output']
    isPrimary: Scalars['Boolean']['output']
    isUnique: Scalars['Boolean']['output']
    length: Scalars['String']['output']
    name: Scalars['String']['output']
    onUpdate?: Maybe<Scalars['String']['output']>
    precision?: Maybe<Scalars['Float']['output']>
    primaryKeyConstraintName?: Maybe<Scalars['String']['output']>
    scale?: Maybe<Scalars['Float']['output']>
    spatialFeatureType?: Maybe<Scalars['String']['output']>
    srid?: Maybe<Scalars['Float']['output']>
    type: Scalars['String']['output']
    unsigned: Scalars['Boolean']['output']
    width?: Maybe<Scalars['Float']['output']>
    zerofill: Scalars['Boolean']['output']
}

export type TableExclusionObjectType = {
    __typename?: 'TableExclusionObjectType'
    expression: Scalars['String']['output']
    name: Scalars['String']['output']
}

export type TableForeignKeyObjectType = {
    __typename?: 'TableForeignKeyObjectType'
    columnNames: Array<Scalars['String']['output']>
    name: Scalars['String']['output']
    onDelete: Scalars['String']['output']
    onUpdate: Scalars['String']['output']
    referencedColumnNames: Array<Scalars['String']['output']>
    referencedTableName: Scalars['String']['output']
}

export type TableIndexObjectType = {
    __typename?: 'TableIndexObjectType'
    columnNames: Array<Scalars['String']['output']>
    isConcurrent: Scalars['Boolean']['output']
    isFulltext: Scalars['Boolean']['output']
    isNullFiltered: Scalars['Boolean']['output']
    isSpatial: Scalars['Boolean']['output']
    isUnique: Scalars['Boolean']['output']
    name: Scalars['String']['output']
    where: Scalars['String']['output']
}

export type TableUniqueObjectType = {
    __typename?: 'TableUniqueObjectType'
    columnNames: Array<Scalars['String']['output']>
    name: Scalars['String']['output']
}

export type TokenPayloadObjectType = {
    __typename?: 'TokenPayloadObjectType'
    email: Scalars['String']['output']
    sub: Scalars['Float']['output']
}

export type TokensObjectType = {
    __typename?: 'TokensObjectType'
    accessToken: Scalars['String']['output']
    refreshToken: Scalars['String']['output']
}

export type User = {
    __typename?: 'User'
    email: Scalars['String']['output']
    id: Scalars['Float']['output']
    isConfirmed: Scalars['Boolean']['output']
}
