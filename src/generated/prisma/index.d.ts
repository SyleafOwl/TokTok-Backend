
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model StreamSession
 * 
 */
export type StreamSession = $Result.DefaultSelection<Prisma.$StreamSessionPayload>
/**
 * Model StreamerMetrics
 * 
 */
export type StreamerMetrics = $Result.DefaultSelection<Prisma.$StreamerMetricsPayload>
/**
 * Model AudienceLevel
 * 
 */
export type AudienceLevel = $Result.DefaultSelection<Prisma.$AudienceLevelPayload>
/**
 * Model Gift
 * 
 */
export type Gift = $Result.DefaultSelection<Prisma.$GiftPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  visitante: 'visitante',
  creador: 'creador'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamSession`: Exposes CRUD operations for the **StreamSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamSessions
    * const streamSessions = await prisma.streamSession.findMany()
    * ```
    */
  get streamSession(): Prisma.StreamSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamerMetrics`: Exposes CRUD operations for the **StreamerMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamerMetrics
    * const streamerMetrics = await prisma.streamerMetrics.findMany()
    * ```
    */
  get streamerMetrics(): Prisma.StreamerMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audienceLevel`: Exposes CRUD operations for the **AudienceLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudienceLevels
    * const audienceLevels = await prisma.audienceLevel.findMany()
    * ```
    */
  get audienceLevel(): Prisma.AudienceLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gift`: Exposes CRUD operations for the **Gift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gifts
    * const gifts = await prisma.gift.findMany()
    * ```
    */
  get gift(): Prisma.GiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Video: 'Video',
    StreamSession: 'StreamSession',
    StreamerMetrics: 'StreamerMetrics',
    AudienceLevel: 'AudienceLevel',
    Gift: 'Gift',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "video" | "streamSession" | "streamerMetrics" | "audienceLevel" | "gift" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      StreamSession: {
        payload: Prisma.$StreamSessionPayload<ExtArgs>
        fields: Prisma.StreamSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          findFirst: {
            args: Prisma.StreamSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          findMany: {
            args: Prisma.StreamSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>[]
          }
          create: {
            args: Prisma.StreamSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          createMany: {
            args: Prisma.StreamSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>[]
          }
          delete: {
            args: Prisma.StreamSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          update: {
            args: Prisma.StreamSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          deleteMany: {
            args: Prisma.StreamSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>[]
          }
          upsert: {
            args: Prisma.StreamSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSessionPayload>
          }
          aggregate: {
            args: Prisma.StreamSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamSession>
          }
          groupBy: {
            args: Prisma.StreamSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamSessionCountArgs<ExtArgs>
            result: $Utils.Optional<StreamSessionCountAggregateOutputType> | number
          }
        }
      }
      StreamerMetrics: {
        payload: Prisma.$StreamerMetricsPayload<ExtArgs>
        fields: Prisma.StreamerMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamerMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamerMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          findFirst: {
            args: Prisma.StreamerMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamerMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          findMany: {
            args: Prisma.StreamerMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>[]
          }
          create: {
            args: Prisma.StreamerMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          createMany: {
            args: Prisma.StreamerMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamerMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>[]
          }
          delete: {
            args: Prisma.StreamerMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          update: {
            args: Prisma.StreamerMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          deleteMany: {
            args: Prisma.StreamerMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamerMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamerMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>[]
          }
          upsert: {
            args: Prisma.StreamerMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerMetricsPayload>
          }
          aggregate: {
            args: Prisma.StreamerMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamerMetrics>
          }
          groupBy: {
            args: Prisma.StreamerMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamerMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamerMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<StreamerMetricsCountAggregateOutputType> | number
          }
        }
      }
      AudienceLevel: {
        payload: Prisma.$AudienceLevelPayload<ExtArgs>
        fields: Prisma.AudienceLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudienceLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudienceLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          findFirst: {
            args: Prisma.AudienceLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudienceLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          findMany: {
            args: Prisma.AudienceLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>[]
          }
          create: {
            args: Prisma.AudienceLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          createMany: {
            args: Prisma.AudienceLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudienceLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>[]
          }
          delete: {
            args: Prisma.AudienceLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          update: {
            args: Prisma.AudienceLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          deleteMany: {
            args: Prisma.AudienceLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudienceLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudienceLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>[]
          }
          upsert: {
            args: Prisma.AudienceLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienceLevelPayload>
          }
          aggregate: {
            args: Prisma.AudienceLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudienceLevel>
          }
          groupBy: {
            args: Prisma.AudienceLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudienceLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudienceLevelCountArgs<ExtArgs>
            result: $Utils.Optional<AudienceLevelCountAggregateOutputType> | number
          }
        }
      }
      Gift: {
        payload: Prisma.$GiftPayload<ExtArgs>
        fields: Prisma.GiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findFirst: {
            args: Prisma.GiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          findMany: {
            args: Prisma.GiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          create: {
            args: Prisma.GiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          createMany: {
            args: Prisma.GiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          delete: {
            args: Prisma.GiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          update: {
            args: Prisma.GiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          deleteMany: {
            args: Prisma.GiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>[]
          }
          upsert: {
            args: Prisma.GiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiftPayload>
          }
          aggregate: {
            args: Prisma.GiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGift>
          }
          groupBy: {
            args: Prisma.GiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftCountArgs<ExtArgs>
            result: $Utils.Optional<GiftCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    video?: VideoOmit
    streamSession?: StreamSessionOmit
    streamerMetrics?: StreamerMetricsOmit
    audienceLevel?: AudienceLevelOmit
    gift?: GiftOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    videos: number
    streamSessions: number
    audienceLevels: number
    giftsReceived: number
    giftsSent: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    streamSessions?: boolean | UserCountOutputTypeCountStreamSessionsArgs
    audienceLevels?: boolean | UserCountOutputTypeCountAudienceLevelsArgs
    giftsReceived?: boolean | UserCountOutputTypeCountGiftsReceivedArgs
    giftsSent?: boolean | UserCountOutputTypeCountGiftsSentArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudienceLevelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceLevelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGiftsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGiftsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type StreamSessionCountOutputType
   */

  export type StreamSessionCountOutputType = {
    gifts: number
  }

  export type StreamSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | StreamSessionCountOutputTypeCountGiftsArgs
  }

  // Custom InputTypes
  /**
   * StreamSessionCountOutputType without action
   */
  export type StreamSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSessionCountOutputType
     */
    select?: StreamSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamSessionCountOutputType without action
   */
  export type StreamSessionCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    rol: $Enums.Rol | null
    password: string | null
    contacto: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    rol: $Enums.Rol | null
    password: string | null
    contacto: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nombre: number
    rol: number
    password: number
    contacto: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nombre?: true
    rol?: true
    password?: true
    contacto?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nombre?: true
    rol?: true
    password?: true
    contacto?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nombre?: true
    rol?: true
    password?: true
    contacto?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    rol?: boolean
    password?: boolean
    contacto?: boolean
    videos?: boolean | User$videosArgs<ExtArgs>
    streamSessions?: boolean | User$streamSessionsArgs<ExtArgs>
    streamerMetrics?: boolean | User$streamerMetricsArgs<ExtArgs>
    audienceLevels?: boolean | User$audienceLevelsArgs<ExtArgs>
    giftsReceived?: boolean | User$giftsReceivedArgs<ExtArgs>
    giftsSent?: boolean | User$giftsSentArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    rol?: boolean
    password?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    rol?: boolean
    password?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nombre?: boolean
    rol?: boolean
    password?: boolean
    contacto?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "rol" | "password" | "contacto", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | User$videosArgs<ExtArgs>
    streamSessions?: boolean | User$streamSessionsArgs<ExtArgs>
    streamerMetrics?: boolean | User$streamerMetricsArgs<ExtArgs>
    audienceLevels?: boolean | User$audienceLevelsArgs<ExtArgs>
    giftsReceived?: boolean | User$giftsReceivedArgs<ExtArgs>
    giftsSent?: boolean | User$giftsSentArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      streamSessions: Prisma.$StreamSessionPayload<ExtArgs>[]
      streamerMetrics: Prisma.$StreamerMetricsPayload<ExtArgs> | null
      audienceLevels: Prisma.$AudienceLevelPayload<ExtArgs>[]
      giftsReceived: Prisma.$GiftPayload<ExtArgs>[]
      giftsSent: Prisma.$GiftPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      rol: $Enums.Rol
      password: string
      contacto: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streamSessions<T extends User$streamSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$streamSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streamerMetrics<T extends User$streamerMetricsArgs<ExtArgs> = {}>(args?: Subset<T, User$streamerMetricsArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    audienceLevels<T extends User$audienceLevelsArgs<ExtArgs> = {}>(args?: Subset<T, User$audienceLevelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giftsReceived<T extends User$giftsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$giftsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giftsSent<T extends User$giftsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$giftsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly rol: FieldRef<"User", 'Rol'>
    readonly password: FieldRef<"User", 'String'>
    readonly contacto: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * User.streamSessions
   */
  export type User$streamSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    where?: StreamSessionWhereInput
    orderBy?: StreamSessionOrderByWithRelationInput | StreamSessionOrderByWithRelationInput[]
    cursor?: StreamSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamSessionScalarFieldEnum | StreamSessionScalarFieldEnum[]
  }

  /**
   * User.streamerMetrics
   */
  export type User$streamerMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    where?: StreamerMetricsWhereInput
  }

  /**
   * User.audienceLevels
   */
  export type User$audienceLevelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    where?: AudienceLevelWhereInput
    orderBy?: AudienceLevelOrderByWithRelationInput | AudienceLevelOrderByWithRelationInput[]
    cursor?: AudienceLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienceLevelScalarFieldEnum | AudienceLevelScalarFieldEnum[]
  }

  /**
   * User.giftsReceived
   */
  export type User$giftsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * User.giftsSent
   */
  export type User$giftsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    likes: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    likes: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    likes: number | null
    userId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    likes: number | null
    userId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    url: number
    likes: number
    userId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    likes?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    likes?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    likes?: true
    userId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    likes?: true
    userId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    likes?: true
    userId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    title: string
    url: string
    likes: number
    userId: string
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    likes?: boolean
    userId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "likes" | "userId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      url: string
      likes: number
      userId: string
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly title: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly likes: FieldRef<"Video", 'Int'>
    readonly userId: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model StreamSession
   */

  export type AggregateStreamSession = {
    _count: StreamSessionCountAggregateOutputType | null
    _avg: StreamSessionAvgAggregateOutputType | null
    _sum: StreamSessionSumAggregateOutputType | null
    _min: StreamSessionMinAggregateOutputType | null
    _max: StreamSessionMaxAggregateOutputType | null
  }

  export type StreamSessionAvgAggregateOutputType = {
    durationMs: number | null
  }

  export type StreamSessionSumAggregateOutputType = {
    durationMs: number | null
  }

  export type StreamSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    durationMs: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    durationMs: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamSessionCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    durationMs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamSessionAvgAggregateInputType = {
    durationMs?: true
  }

  export type StreamSessionSumAggregateInputType = {
    durationMs?: true
  }

  export type StreamSessionMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    durationMs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    durationMs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamSessionCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    durationMs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSession to aggregate.
     */
    where?: StreamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSessions to fetch.
     */
    orderBy?: StreamSessionOrderByWithRelationInput | StreamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamSessions
    **/
    _count?: true | StreamSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamSessionMaxAggregateInputType
  }

  export type GetStreamSessionAggregateType<T extends StreamSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamSession[P]>
      : GetScalarType<T[P], AggregateStreamSession[P]>
  }




  export type StreamSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSessionWhereInput
    orderBy?: StreamSessionOrderByWithAggregationInput | StreamSessionOrderByWithAggregationInput[]
    by: StreamSessionScalarFieldEnum[] | StreamSessionScalarFieldEnum
    having?: StreamSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamSessionCountAggregateInputType | true
    _avg?: StreamSessionAvgAggregateInputType
    _sum?: StreamSessionSumAggregateInputType
    _min?: StreamSessionMinAggregateInputType
    _max?: StreamSessionMaxAggregateInputType
  }

  export type StreamSessionGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date | null
    durationMs: number
    createdAt: Date
    updatedAt: Date
    _count: StreamSessionCountAggregateOutputType | null
    _avg: StreamSessionAvgAggregateOutputType | null
    _sum: StreamSessionSumAggregateOutputType | null
    _min: StreamSessionMinAggregateOutputType | null
    _max: StreamSessionMaxAggregateOutputType | null
  }

  type GetStreamSessionGroupByPayload<T extends StreamSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamSessionGroupByOutputType[P]>
            : GetScalarType<T[P], StreamSessionGroupByOutputType[P]>
        }
      >
    >


  export type StreamSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gifts?: boolean | StreamSession$giftsArgs<ExtArgs>
    _count?: boolean | StreamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSession"]>

  export type StreamSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSession"]>

  export type StreamSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSession"]>

  export type StreamSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "durationMs" | "createdAt" | "updatedAt", ExtArgs["result"]["streamSession"]>
  export type StreamSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gifts?: boolean | StreamSession$giftsArgs<ExtArgs>
    _count?: boolean | StreamSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gifts: Prisma.$GiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date | null
      durationMs: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streamSession"]>
    composites: {}
  }

  type StreamSessionGetPayload<S extends boolean | null | undefined | StreamSessionDefaultArgs> = $Result.GetResult<Prisma.$StreamSessionPayload, S>

  type StreamSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamSessionCountAggregateInputType | true
    }

  export interface StreamSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamSession'], meta: { name: 'StreamSession' } }
    /**
     * Find zero or one StreamSession that matches the filter.
     * @param {StreamSessionFindUniqueArgs} args - Arguments to find a StreamSession
     * @example
     * // Get one StreamSession
     * const streamSession = await prisma.streamSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamSessionFindUniqueArgs>(args: SelectSubset<T, StreamSessionFindUniqueArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamSessionFindUniqueOrThrowArgs} args - Arguments to find a StreamSession
     * @example
     * // Get one StreamSession
     * const streamSession = await prisma.streamSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionFindFirstArgs} args - Arguments to find a StreamSession
     * @example
     * // Get one StreamSession
     * const streamSession = await prisma.streamSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamSessionFindFirstArgs>(args?: SelectSubset<T, StreamSessionFindFirstArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionFindFirstOrThrowArgs} args - Arguments to find a StreamSession
     * @example
     * // Get one StreamSession
     * const streamSession = await prisma.streamSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamSessions
     * const streamSessions = await prisma.streamSession.findMany()
     * 
     * // Get first 10 StreamSessions
     * const streamSessions = await prisma.streamSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamSessionWithIdOnly = await prisma.streamSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamSessionFindManyArgs>(args?: SelectSubset<T, StreamSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamSession.
     * @param {StreamSessionCreateArgs} args - Arguments to create a StreamSession.
     * @example
     * // Create one StreamSession
     * const StreamSession = await prisma.streamSession.create({
     *   data: {
     *     // ... data to create a StreamSession
     *   }
     * })
     * 
     */
    create<T extends StreamSessionCreateArgs>(args: SelectSubset<T, StreamSessionCreateArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamSessions.
     * @param {StreamSessionCreateManyArgs} args - Arguments to create many StreamSessions.
     * @example
     * // Create many StreamSessions
     * const streamSession = await prisma.streamSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamSessionCreateManyArgs>(args?: SelectSubset<T, StreamSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamSessions and returns the data saved in the database.
     * @param {StreamSessionCreateManyAndReturnArgs} args - Arguments to create many StreamSessions.
     * @example
     * // Create many StreamSessions
     * const streamSession = await prisma.streamSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamSessions and only return the `id`
     * const streamSessionWithIdOnly = await prisma.streamSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamSession.
     * @param {StreamSessionDeleteArgs} args - Arguments to delete one StreamSession.
     * @example
     * // Delete one StreamSession
     * const StreamSession = await prisma.streamSession.delete({
     *   where: {
     *     // ... filter to delete one StreamSession
     *   }
     * })
     * 
     */
    delete<T extends StreamSessionDeleteArgs>(args: SelectSubset<T, StreamSessionDeleteArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamSession.
     * @param {StreamSessionUpdateArgs} args - Arguments to update one StreamSession.
     * @example
     * // Update one StreamSession
     * const streamSession = await prisma.streamSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamSessionUpdateArgs>(args: SelectSubset<T, StreamSessionUpdateArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamSessions.
     * @param {StreamSessionDeleteManyArgs} args - Arguments to filter StreamSessions to delete.
     * @example
     * // Delete a few StreamSessions
     * const { count } = await prisma.streamSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamSessionDeleteManyArgs>(args?: SelectSubset<T, StreamSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamSessions
     * const streamSession = await prisma.streamSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamSessionUpdateManyArgs>(args: SelectSubset<T, StreamSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSessions and returns the data updated in the database.
     * @param {StreamSessionUpdateManyAndReturnArgs} args - Arguments to update many StreamSessions.
     * @example
     * // Update many StreamSessions
     * const streamSession = await prisma.streamSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamSessions and only return the `id`
     * const streamSessionWithIdOnly = await prisma.streamSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamSession.
     * @param {StreamSessionUpsertArgs} args - Arguments to update or create a StreamSession.
     * @example
     * // Update or create a StreamSession
     * const streamSession = await prisma.streamSession.upsert({
     *   create: {
     *     // ... data to create a StreamSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamSession we want to update
     *   }
     * })
     */
    upsert<T extends StreamSessionUpsertArgs>(args: SelectSubset<T, StreamSessionUpsertArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionCountArgs} args - Arguments to filter StreamSessions to count.
     * @example
     * // Count the number of StreamSessions
     * const count = await prisma.streamSession.count({
     *   where: {
     *     // ... the filter for the StreamSessions we want to count
     *   }
     * })
    **/
    count<T extends StreamSessionCountArgs>(
      args?: Subset<T, StreamSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamSessionAggregateArgs>(args: Subset<T, StreamSessionAggregateArgs>): Prisma.PrismaPromise<GetStreamSessionAggregateType<T>>

    /**
     * Group by StreamSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamSessionGroupByArgs['orderBy'] }
        : { orderBy?: StreamSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamSession model
   */
  readonly fields: StreamSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gifts<T extends StreamSession$giftsArgs<ExtArgs> = {}>(args?: Subset<T, StreamSession$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamSession model
   */
  interface StreamSessionFieldRefs {
    readonly id: FieldRef<"StreamSession", 'String'>
    readonly userId: FieldRef<"StreamSession", 'String'>
    readonly startTime: FieldRef<"StreamSession", 'DateTime'>
    readonly endTime: FieldRef<"StreamSession", 'DateTime'>
    readonly durationMs: FieldRef<"StreamSession", 'Int'>
    readonly createdAt: FieldRef<"StreamSession", 'DateTime'>
    readonly updatedAt: FieldRef<"StreamSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamSession findUnique
   */
  export type StreamSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSession to fetch.
     */
    where: StreamSessionWhereUniqueInput
  }

  /**
   * StreamSession findUniqueOrThrow
   */
  export type StreamSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSession to fetch.
     */
    where: StreamSessionWhereUniqueInput
  }

  /**
   * StreamSession findFirst
   */
  export type StreamSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSession to fetch.
     */
    where?: StreamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSessions to fetch.
     */
    orderBy?: StreamSessionOrderByWithRelationInput | StreamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSessions.
     */
    cursor?: StreamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSessions.
     */
    distinct?: StreamSessionScalarFieldEnum | StreamSessionScalarFieldEnum[]
  }

  /**
   * StreamSession findFirstOrThrow
   */
  export type StreamSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSession to fetch.
     */
    where?: StreamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSessions to fetch.
     */
    orderBy?: StreamSessionOrderByWithRelationInput | StreamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSessions.
     */
    cursor?: StreamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSessions.
     */
    distinct?: StreamSessionScalarFieldEnum | StreamSessionScalarFieldEnum[]
  }

  /**
   * StreamSession findMany
   */
  export type StreamSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSessions to fetch.
     */
    where?: StreamSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSessions to fetch.
     */
    orderBy?: StreamSessionOrderByWithRelationInput | StreamSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamSessions.
     */
    cursor?: StreamSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSessions.
     */
    skip?: number
    distinct?: StreamSessionScalarFieldEnum | StreamSessionScalarFieldEnum[]
  }

  /**
   * StreamSession create
   */
  export type StreamSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamSession.
     */
    data: XOR<StreamSessionCreateInput, StreamSessionUncheckedCreateInput>
  }

  /**
   * StreamSession createMany
   */
  export type StreamSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamSessions.
     */
    data: StreamSessionCreateManyInput | StreamSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamSession createManyAndReturn
   */
  export type StreamSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * The data used to create many StreamSessions.
     */
    data: StreamSessionCreateManyInput | StreamSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSession update
   */
  export type StreamSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamSession.
     */
    data: XOR<StreamSessionUpdateInput, StreamSessionUncheckedUpdateInput>
    /**
     * Choose, which StreamSession to update.
     */
    where: StreamSessionWhereUniqueInput
  }

  /**
   * StreamSession updateMany
   */
  export type StreamSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamSessions.
     */
    data: XOR<StreamSessionUpdateManyMutationInput, StreamSessionUncheckedUpdateManyInput>
    /**
     * Filter which StreamSessions to update
     */
    where?: StreamSessionWhereInput
    /**
     * Limit how many StreamSessions to update.
     */
    limit?: number
  }

  /**
   * StreamSession updateManyAndReturn
   */
  export type StreamSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * The data used to update StreamSessions.
     */
    data: XOR<StreamSessionUpdateManyMutationInput, StreamSessionUncheckedUpdateManyInput>
    /**
     * Filter which StreamSessions to update
     */
    where?: StreamSessionWhereInput
    /**
     * Limit how many StreamSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSession upsert
   */
  export type StreamSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamSession to update in case it exists.
     */
    where: StreamSessionWhereUniqueInput
    /**
     * In case the StreamSession found by the `where` argument doesn't exist, create a new StreamSession with this data.
     */
    create: XOR<StreamSessionCreateInput, StreamSessionUncheckedCreateInput>
    /**
     * In case the StreamSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamSessionUpdateInput, StreamSessionUncheckedUpdateInput>
  }

  /**
   * StreamSession delete
   */
  export type StreamSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    /**
     * Filter which StreamSession to delete.
     */
    where: StreamSessionWhereUniqueInput
  }

  /**
   * StreamSession deleteMany
   */
  export type StreamSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSessions to delete
     */
    where?: StreamSessionWhereInput
    /**
     * Limit how many StreamSessions to delete.
     */
    limit?: number
  }

  /**
   * StreamSession.gifts
   */
  export type StreamSession$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    cursor?: GiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * StreamSession without action
   */
  export type StreamSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
  }


  /**
   * Model StreamerMetrics
   */

  export type AggregateStreamerMetrics = {
    _count: StreamerMetricsCountAggregateOutputType | null
    _avg: StreamerMetricsAvgAggregateOutputType | null
    _sum: StreamerMetricsSumAggregateOutputType | null
    _min: StreamerMetricsMinAggregateOutputType | null
    _max: StreamerMetricsMaxAggregateOutputType | null
  }

  export type StreamerMetricsAvgAggregateOutputType = {
    totalMs: number | null
    totalSessions: number | null
    currentLevel: number | null
  }

  export type StreamerMetricsSumAggregateOutputType = {
    totalMs: number | null
    totalSessions: number | null
    currentLevel: number | null
  }

  export type StreamerMetricsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalMs: number | null
    totalSessions: number | null
    currentLevel: number | null
    lastLevelUpAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamerMetricsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalMs: number | null
    totalSessions: number | null
    currentLevel: number | null
    lastLevelUpAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamerMetricsCountAggregateOutputType = {
    id: number
    userId: number
    totalMs: number
    totalSessions: number
    currentLevel: number
    lastLevelUpAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamerMetricsAvgAggregateInputType = {
    totalMs?: true
    totalSessions?: true
    currentLevel?: true
  }

  export type StreamerMetricsSumAggregateInputType = {
    totalMs?: true
    totalSessions?: true
    currentLevel?: true
  }

  export type StreamerMetricsMinAggregateInputType = {
    id?: true
    userId?: true
    totalMs?: true
    totalSessions?: true
    currentLevel?: true
    lastLevelUpAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamerMetricsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalMs?: true
    totalSessions?: true
    currentLevel?: true
    lastLevelUpAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamerMetricsCountAggregateInputType = {
    id?: true
    userId?: true
    totalMs?: true
    totalSessions?: true
    currentLevel?: true
    lastLevelUpAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamerMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamerMetrics to aggregate.
     */
    where?: StreamerMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerMetrics to fetch.
     */
    orderBy?: StreamerMetricsOrderByWithRelationInput | StreamerMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamerMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamerMetrics
    **/
    _count?: true | StreamerMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamerMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamerMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamerMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamerMetricsMaxAggregateInputType
  }

  export type GetStreamerMetricsAggregateType<T extends StreamerMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamerMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamerMetrics[P]>
      : GetScalarType<T[P], AggregateStreamerMetrics[P]>
  }




  export type StreamerMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamerMetricsWhereInput
    orderBy?: StreamerMetricsOrderByWithAggregationInput | StreamerMetricsOrderByWithAggregationInput[]
    by: StreamerMetricsScalarFieldEnum[] | StreamerMetricsScalarFieldEnum
    having?: StreamerMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamerMetricsCountAggregateInputType | true
    _avg?: StreamerMetricsAvgAggregateInputType
    _sum?: StreamerMetricsSumAggregateInputType
    _min?: StreamerMetricsMinAggregateInputType
    _max?: StreamerMetricsMaxAggregateInputType
  }

  export type StreamerMetricsGroupByOutputType = {
    id: string
    userId: string
    totalMs: number
    totalSessions: number
    currentLevel: number
    lastLevelUpAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StreamerMetricsCountAggregateOutputType | null
    _avg: StreamerMetricsAvgAggregateOutputType | null
    _sum: StreamerMetricsSumAggregateOutputType | null
    _min: StreamerMetricsMinAggregateOutputType | null
    _max: StreamerMetricsMaxAggregateOutputType | null
  }

  type GetStreamerMetricsGroupByPayload<T extends StreamerMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamerMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamerMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamerMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], StreamerMetricsGroupByOutputType[P]>
        }
      >
    >


  export type StreamerMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMs?: boolean
    totalSessions?: boolean
    currentLevel?: boolean
    lastLevelUpAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamerMetrics"]>

  export type StreamerMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMs?: boolean
    totalSessions?: boolean
    currentLevel?: boolean
    lastLevelUpAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamerMetrics"]>

  export type StreamerMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMs?: boolean
    totalSessions?: boolean
    currentLevel?: boolean
    lastLevelUpAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamerMetrics"]>

  export type StreamerMetricsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalMs?: boolean
    totalSessions?: boolean
    currentLevel?: boolean
    lastLevelUpAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamerMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalMs" | "totalSessions" | "currentLevel" | "lastLevelUpAt" | "createdAt" | "updatedAt", ExtArgs["result"]["streamerMetrics"]>
  export type StreamerMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamerMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamerMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamerMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamerMetrics"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalMs: number
      totalSessions: number
      currentLevel: number
      lastLevelUpAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streamerMetrics"]>
    composites: {}
  }

  type StreamerMetricsGetPayload<S extends boolean | null | undefined | StreamerMetricsDefaultArgs> = $Result.GetResult<Prisma.$StreamerMetricsPayload, S>

  type StreamerMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamerMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamerMetricsCountAggregateInputType | true
    }

  export interface StreamerMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamerMetrics'], meta: { name: 'StreamerMetrics' } }
    /**
     * Find zero or one StreamerMetrics that matches the filter.
     * @param {StreamerMetricsFindUniqueArgs} args - Arguments to find a StreamerMetrics
     * @example
     * // Get one StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamerMetricsFindUniqueArgs>(args: SelectSubset<T, StreamerMetricsFindUniqueArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamerMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamerMetricsFindUniqueOrThrowArgs} args - Arguments to find a StreamerMetrics
     * @example
     * // Get one StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamerMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamerMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamerMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsFindFirstArgs} args - Arguments to find a StreamerMetrics
     * @example
     * // Get one StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamerMetricsFindFirstArgs>(args?: SelectSubset<T, StreamerMetricsFindFirstArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamerMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsFindFirstOrThrowArgs} args - Arguments to find a StreamerMetrics
     * @example
     * // Get one StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamerMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamerMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamerMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findMany()
     * 
     * // Get first 10 StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamerMetricsWithIdOnly = await prisma.streamerMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamerMetricsFindManyArgs>(args?: SelectSubset<T, StreamerMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamerMetrics.
     * @param {StreamerMetricsCreateArgs} args - Arguments to create a StreamerMetrics.
     * @example
     * // Create one StreamerMetrics
     * const StreamerMetrics = await prisma.streamerMetrics.create({
     *   data: {
     *     // ... data to create a StreamerMetrics
     *   }
     * })
     * 
     */
    create<T extends StreamerMetricsCreateArgs>(args: SelectSubset<T, StreamerMetricsCreateArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamerMetrics.
     * @param {StreamerMetricsCreateManyArgs} args - Arguments to create many StreamerMetrics.
     * @example
     * // Create many StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamerMetricsCreateManyArgs>(args?: SelectSubset<T, StreamerMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamerMetrics and returns the data saved in the database.
     * @param {StreamerMetricsCreateManyAndReturnArgs} args - Arguments to create many StreamerMetrics.
     * @example
     * // Create many StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamerMetrics and only return the `id`
     * const streamerMetricsWithIdOnly = await prisma.streamerMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamerMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamerMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamerMetrics.
     * @param {StreamerMetricsDeleteArgs} args - Arguments to delete one StreamerMetrics.
     * @example
     * // Delete one StreamerMetrics
     * const StreamerMetrics = await prisma.streamerMetrics.delete({
     *   where: {
     *     // ... filter to delete one StreamerMetrics
     *   }
     * })
     * 
     */
    delete<T extends StreamerMetricsDeleteArgs>(args: SelectSubset<T, StreamerMetricsDeleteArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamerMetrics.
     * @param {StreamerMetricsUpdateArgs} args - Arguments to update one StreamerMetrics.
     * @example
     * // Update one StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamerMetricsUpdateArgs>(args: SelectSubset<T, StreamerMetricsUpdateArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamerMetrics.
     * @param {StreamerMetricsDeleteManyArgs} args - Arguments to filter StreamerMetrics to delete.
     * @example
     * // Delete a few StreamerMetrics
     * const { count } = await prisma.streamerMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamerMetricsDeleteManyArgs>(args?: SelectSubset<T, StreamerMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamerMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamerMetricsUpdateManyArgs>(args: SelectSubset<T, StreamerMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamerMetrics and returns the data updated in the database.
     * @param {StreamerMetricsUpdateManyAndReturnArgs} args - Arguments to update many StreamerMetrics.
     * @example
     * // Update many StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamerMetrics and only return the `id`
     * const streamerMetricsWithIdOnly = await prisma.streamerMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamerMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamerMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamerMetrics.
     * @param {StreamerMetricsUpsertArgs} args - Arguments to update or create a StreamerMetrics.
     * @example
     * // Update or create a StreamerMetrics
     * const streamerMetrics = await prisma.streamerMetrics.upsert({
     *   create: {
     *     // ... data to create a StreamerMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamerMetrics we want to update
     *   }
     * })
     */
    upsert<T extends StreamerMetricsUpsertArgs>(args: SelectSubset<T, StreamerMetricsUpsertArgs<ExtArgs>>): Prisma__StreamerMetricsClient<$Result.GetResult<Prisma.$StreamerMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamerMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsCountArgs} args - Arguments to filter StreamerMetrics to count.
     * @example
     * // Count the number of StreamerMetrics
     * const count = await prisma.streamerMetrics.count({
     *   where: {
     *     // ... the filter for the StreamerMetrics we want to count
     *   }
     * })
    **/
    count<T extends StreamerMetricsCountArgs>(
      args?: Subset<T, StreamerMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamerMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamerMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamerMetricsAggregateArgs>(args: Subset<T, StreamerMetricsAggregateArgs>): Prisma.PrismaPromise<GetStreamerMetricsAggregateType<T>>

    /**
     * Group by StreamerMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamerMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamerMetricsGroupByArgs['orderBy'] }
        : { orderBy?: StreamerMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamerMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamerMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamerMetrics model
   */
  readonly fields: StreamerMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamerMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamerMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamerMetrics model
   */
  interface StreamerMetricsFieldRefs {
    readonly id: FieldRef<"StreamerMetrics", 'String'>
    readonly userId: FieldRef<"StreamerMetrics", 'String'>
    readonly totalMs: FieldRef<"StreamerMetrics", 'Int'>
    readonly totalSessions: FieldRef<"StreamerMetrics", 'Int'>
    readonly currentLevel: FieldRef<"StreamerMetrics", 'Int'>
    readonly lastLevelUpAt: FieldRef<"StreamerMetrics", 'DateTime'>
    readonly createdAt: FieldRef<"StreamerMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"StreamerMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamerMetrics findUnique
   */
  export type StreamerMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter, which StreamerMetrics to fetch.
     */
    where: StreamerMetricsWhereUniqueInput
  }

  /**
   * StreamerMetrics findUniqueOrThrow
   */
  export type StreamerMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter, which StreamerMetrics to fetch.
     */
    where: StreamerMetricsWhereUniqueInput
  }

  /**
   * StreamerMetrics findFirst
   */
  export type StreamerMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter, which StreamerMetrics to fetch.
     */
    where?: StreamerMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerMetrics to fetch.
     */
    orderBy?: StreamerMetricsOrderByWithRelationInput | StreamerMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamerMetrics.
     */
    cursor?: StreamerMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamerMetrics.
     */
    distinct?: StreamerMetricsScalarFieldEnum | StreamerMetricsScalarFieldEnum[]
  }

  /**
   * StreamerMetrics findFirstOrThrow
   */
  export type StreamerMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter, which StreamerMetrics to fetch.
     */
    where?: StreamerMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerMetrics to fetch.
     */
    orderBy?: StreamerMetricsOrderByWithRelationInput | StreamerMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamerMetrics.
     */
    cursor?: StreamerMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamerMetrics.
     */
    distinct?: StreamerMetricsScalarFieldEnum | StreamerMetricsScalarFieldEnum[]
  }

  /**
   * StreamerMetrics findMany
   */
  export type StreamerMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter, which StreamerMetrics to fetch.
     */
    where?: StreamerMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerMetrics to fetch.
     */
    orderBy?: StreamerMetricsOrderByWithRelationInput | StreamerMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamerMetrics.
     */
    cursor?: StreamerMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerMetrics.
     */
    skip?: number
    distinct?: StreamerMetricsScalarFieldEnum | StreamerMetricsScalarFieldEnum[]
  }

  /**
   * StreamerMetrics create
   */
  export type StreamerMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamerMetrics.
     */
    data: XOR<StreamerMetricsCreateInput, StreamerMetricsUncheckedCreateInput>
  }

  /**
   * StreamerMetrics createMany
   */
  export type StreamerMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamerMetrics.
     */
    data: StreamerMetricsCreateManyInput | StreamerMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamerMetrics createManyAndReturn
   */
  export type StreamerMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many StreamerMetrics.
     */
    data: StreamerMetricsCreateManyInput | StreamerMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamerMetrics update
   */
  export type StreamerMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamerMetrics.
     */
    data: XOR<StreamerMetricsUpdateInput, StreamerMetricsUncheckedUpdateInput>
    /**
     * Choose, which StreamerMetrics to update.
     */
    where: StreamerMetricsWhereUniqueInput
  }

  /**
   * StreamerMetrics updateMany
   */
  export type StreamerMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamerMetrics.
     */
    data: XOR<StreamerMetricsUpdateManyMutationInput, StreamerMetricsUncheckedUpdateManyInput>
    /**
     * Filter which StreamerMetrics to update
     */
    where?: StreamerMetricsWhereInput
    /**
     * Limit how many StreamerMetrics to update.
     */
    limit?: number
  }

  /**
   * StreamerMetrics updateManyAndReturn
   */
  export type StreamerMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * The data used to update StreamerMetrics.
     */
    data: XOR<StreamerMetricsUpdateManyMutationInput, StreamerMetricsUncheckedUpdateManyInput>
    /**
     * Filter which StreamerMetrics to update
     */
    where?: StreamerMetricsWhereInput
    /**
     * Limit how many StreamerMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamerMetrics upsert
   */
  export type StreamerMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamerMetrics to update in case it exists.
     */
    where: StreamerMetricsWhereUniqueInput
    /**
     * In case the StreamerMetrics found by the `where` argument doesn't exist, create a new StreamerMetrics with this data.
     */
    create: XOR<StreamerMetricsCreateInput, StreamerMetricsUncheckedCreateInput>
    /**
     * In case the StreamerMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamerMetricsUpdateInput, StreamerMetricsUncheckedUpdateInput>
  }

  /**
   * StreamerMetrics delete
   */
  export type StreamerMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
    /**
     * Filter which StreamerMetrics to delete.
     */
    where: StreamerMetricsWhereUniqueInput
  }

  /**
   * StreamerMetrics deleteMany
   */
  export type StreamerMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamerMetrics to delete
     */
    where?: StreamerMetricsWhereInput
    /**
     * Limit how many StreamerMetrics to delete.
     */
    limit?: number
  }

  /**
   * StreamerMetrics without action
   */
  export type StreamerMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerMetrics
     */
    select?: StreamerMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerMetrics
     */
    omit?: StreamerMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerMetricsInclude<ExtArgs> | null
  }


  /**
   * Model AudienceLevel
   */

  export type AggregateAudienceLevel = {
    _count: AudienceLevelCountAggregateOutputType | null
    _avg: AudienceLevelAvgAggregateOutputType | null
    _sum: AudienceLevelSumAggregateOutputType | null
    _min: AudienceLevelMinAggregateOutputType | null
    _max: AudienceLevelMaxAggregateOutputType | null
  }

  export type AudienceLevelAvgAggregateOutputType = {
    level: number | null
  }

  export type AudienceLevelSumAggregateOutputType = {
    level: number | null
  }

  export type AudienceLevelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    level: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudienceLevelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    level: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudienceLevelCountAggregateOutputType = {
    id: number
    userId: number
    level: number
    name: number
    description: number
    viewPermissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AudienceLevelAvgAggregateInputType = {
    level?: true
  }

  export type AudienceLevelSumAggregateInputType = {
    level?: true
  }

  export type AudienceLevelMinAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudienceLevelMaxAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudienceLevelCountAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    name?: true
    description?: true
    viewPermissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AudienceLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudienceLevel to aggregate.
     */
    where?: AudienceLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudienceLevels to fetch.
     */
    orderBy?: AudienceLevelOrderByWithRelationInput | AudienceLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudienceLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudienceLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudienceLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudienceLevels
    **/
    _count?: true | AudienceLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudienceLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudienceLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudienceLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudienceLevelMaxAggregateInputType
  }

  export type GetAudienceLevelAggregateType<T extends AudienceLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateAudienceLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudienceLevel[P]>
      : GetScalarType<T[P], AggregateAudienceLevel[P]>
  }




  export type AudienceLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceLevelWhereInput
    orderBy?: AudienceLevelOrderByWithAggregationInput | AudienceLevelOrderByWithAggregationInput[]
    by: AudienceLevelScalarFieldEnum[] | AudienceLevelScalarFieldEnum
    having?: AudienceLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudienceLevelCountAggregateInputType | true
    _avg?: AudienceLevelAvgAggregateInputType
    _sum?: AudienceLevelSumAggregateInputType
    _min?: AudienceLevelMinAggregateInputType
    _max?: AudienceLevelMaxAggregateInputType
  }

  export type AudienceLevelGroupByOutputType = {
    id: string
    userId: string
    level: number
    name: string
    description: string | null
    viewPermissions: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AudienceLevelCountAggregateOutputType | null
    _avg: AudienceLevelAvgAggregateOutputType | null
    _sum: AudienceLevelSumAggregateOutputType | null
    _min: AudienceLevelMinAggregateOutputType | null
    _max: AudienceLevelMaxAggregateOutputType | null
  }

  type GetAudienceLevelGroupByPayload<T extends AudienceLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudienceLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudienceLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudienceLevelGroupByOutputType[P]>
            : GetScalarType<T[P], AudienceLevelGroupByOutputType[P]>
        }
      >
    >


  export type AudienceLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    name?: boolean
    description?: boolean
    viewPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audienceLevel"]>

  export type AudienceLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    name?: boolean
    description?: boolean
    viewPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audienceLevel"]>

  export type AudienceLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    name?: boolean
    description?: boolean
    viewPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audienceLevel"]>

  export type AudienceLevelSelectScalar = {
    id?: boolean
    userId?: boolean
    level?: boolean
    name?: boolean
    description?: boolean
    viewPermissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AudienceLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "level" | "name" | "description" | "viewPermissions" | "createdAt" | "updatedAt", ExtArgs["result"]["audienceLevel"]>
  export type AudienceLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudienceLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudienceLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AudienceLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudienceLevel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      level: number
      name: string
      description: string | null
      viewPermissions: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["audienceLevel"]>
    composites: {}
  }

  type AudienceLevelGetPayload<S extends boolean | null | undefined | AudienceLevelDefaultArgs> = $Result.GetResult<Prisma.$AudienceLevelPayload, S>

  type AudienceLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudienceLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudienceLevelCountAggregateInputType | true
    }

  export interface AudienceLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudienceLevel'], meta: { name: 'AudienceLevel' } }
    /**
     * Find zero or one AudienceLevel that matches the filter.
     * @param {AudienceLevelFindUniqueArgs} args - Arguments to find a AudienceLevel
     * @example
     * // Get one AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudienceLevelFindUniqueArgs>(args: SelectSubset<T, AudienceLevelFindUniqueArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudienceLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudienceLevelFindUniqueOrThrowArgs} args - Arguments to find a AudienceLevel
     * @example
     * // Get one AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudienceLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, AudienceLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudienceLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelFindFirstArgs} args - Arguments to find a AudienceLevel
     * @example
     * // Get one AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudienceLevelFindFirstArgs>(args?: SelectSubset<T, AudienceLevelFindFirstArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudienceLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelFindFirstOrThrowArgs} args - Arguments to find a AudienceLevel
     * @example
     * // Get one AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudienceLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, AudienceLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudienceLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudienceLevels
     * const audienceLevels = await prisma.audienceLevel.findMany()
     * 
     * // Get first 10 AudienceLevels
     * const audienceLevels = await prisma.audienceLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audienceLevelWithIdOnly = await prisma.audienceLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudienceLevelFindManyArgs>(args?: SelectSubset<T, AudienceLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudienceLevel.
     * @param {AudienceLevelCreateArgs} args - Arguments to create a AudienceLevel.
     * @example
     * // Create one AudienceLevel
     * const AudienceLevel = await prisma.audienceLevel.create({
     *   data: {
     *     // ... data to create a AudienceLevel
     *   }
     * })
     * 
     */
    create<T extends AudienceLevelCreateArgs>(args: SelectSubset<T, AudienceLevelCreateArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudienceLevels.
     * @param {AudienceLevelCreateManyArgs} args - Arguments to create many AudienceLevels.
     * @example
     * // Create many AudienceLevels
     * const audienceLevel = await prisma.audienceLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudienceLevelCreateManyArgs>(args?: SelectSubset<T, AudienceLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudienceLevels and returns the data saved in the database.
     * @param {AudienceLevelCreateManyAndReturnArgs} args - Arguments to create many AudienceLevels.
     * @example
     * // Create many AudienceLevels
     * const audienceLevel = await prisma.audienceLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudienceLevels and only return the `id`
     * const audienceLevelWithIdOnly = await prisma.audienceLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudienceLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, AudienceLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AudienceLevel.
     * @param {AudienceLevelDeleteArgs} args - Arguments to delete one AudienceLevel.
     * @example
     * // Delete one AudienceLevel
     * const AudienceLevel = await prisma.audienceLevel.delete({
     *   where: {
     *     // ... filter to delete one AudienceLevel
     *   }
     * })
     * 
     */
    delete<T extends AudienceLevelDeleteArgs>(args: SelectSubset<T, AudienceLevelDeleteArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudienceLevel.
     * @param {AudienceLevelUpdateArgs} args - Arguments to update one AudienceLevel.
     * @example
     * // Update one AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudienceLevelUpdateArgs>(args: SelectSubset<T, AudienceLevelUpdateArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudienceLevels.
     * @param {AudienceLevelDeleteManyArgs} args - Arguments to filter AudienceLevels to delete.
     * @example
     * // Delete a few AudienceLevels
     * const { count } = await prisma.audienceLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudienceLevelDeleteManyArgs>(args?: SelectSubset<T, AudienceLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudienceLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudienceLevels
     * const audienceLevel = await prisma.audienceLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudienceLevelUpdateManyArgs>(args: SelectSubset<T, AudienceLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudienceLevels and returns the data updated in the database.
     * @param {AudienceLevelUpdateManyAndReturnArgs} args - Arguments to update many AudienceLevels.
     * @example
     * // Update many AudienceLevels
     * const audienceLevel = await prisma.audienceLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudienceLevels and only return the `id`
     * const audienceLevelWithIdOnly = await prisma.audienceLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudienceLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, AudienceLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AudienceLevel.
     * @param {AudienceLevelUpsertArgs} args - Arguments to update or create a AudienceLevel.
     * @example
     * // Update or create a AudienceLevel
     * const audienceLevel = await prisma.audienceLevel.upsert({
     *   create: {
     *     // ... data to create a AudienceLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudienceLevel we want to update
     *   }
     * })
     */
    upsert<T extends AudienceLevelUpsertArgs>(args: SelectSubset<T, AudienceLevelUpsertArgs<ExtArgs>>): Prisma__AudienceLevelClient<$Result.GetResult<Prisma.$AudienceLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudienceLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelCountArgs} args - Arguments to filter AudienceLevels to count.
     * @example
     * // Count the number of AudienceLevels
     * const count = await prisma.audienceLevel.count({
     *   where: {
     *     // ... the filter for the AudienceLevels we want to count
     *   }
     * })
    **/
    count<T extends AudienceLevelCountArgs>(
      args?: Subset<T, AudienceLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudienceLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudienceLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudienceLevelAggregateArgs>(args: Subset<T, AudienceLevelAggregateArgs>): Prisma.PrismaPromise<GetAudienceLevelAggregateType<T>>

    /**
     * Group by AudienceLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudienceLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudienceLevelGroupByArgs['orderBy'] }
        : { orderBy?: AudienceLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudienceLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudienceLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudienceLevel model
   */
  readonly fields: AudienceLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudienceLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudienceLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudienceLevel model
   */
  interface AudienceLevelFieldRefs {
    readonly id: FieldRef<"AudienceLevel", 'String'>
    readonly userId: FieldRef<"AudienceLevel", 'String'>
    readonly level: FieldRef<"AudienceLevel", 'Int'>
    readonly name: FieldRef<"AudienceLevel", 'String'>
    readonly description: FieldRef<"AudienceLevel", 'String'>
    readonly viewPermissions: FieldRef<"AudienceLevel", 'Json'>
    readonly createdAt: FieldRef<"AudienceLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"AudienceLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudienceLevel findUnique
   */
  export type AudienceLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter, which AudienceLevel to fetch.
     */
    where: AudienceLevelWhereUniqueInput
  }

  /**
   * AudienceLevel findUniqueOrThrow
   */
  export type AudienceLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter, which AudienceLevel to fetch.
     */
    where: AudienceLevelWhereUniqueInput
  }

  /**
   * AudienceLevel findFirst
   */
  export type AudienceLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter, which AudienceLevel to fetch.
     */
    where?: AudienceLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudienceLevels to fetch.
     */
    orderBy?: AudienceLevelOrderByWithRelationInput | AudienceLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudienceLevels.
     */
    cursor?: AudienceLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudienceLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudienceLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudienceLevels.
     */
    distinct?: AudienceLevelScalarFieldEnum | AudienceLevelScalarFieldEnum[]
  }

  /**
   * AudienceLevel findFirstOrThrow
   */
  export type AudienceLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter, which AudienceLevel to fetch.
     */
    where?: AudienceLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudienceLevels to fetch.
     */
    orderBy?: AudienceLevelOrderByWithRelationInput | AudienceLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudienceLevels.
     */
    cursor?: AudienceLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudienceLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudienceLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudienceLevels.
     */
    distinct?: AudienceLevelScalarFieldEnum | AudienceLevelScalarFieldEnum[]
  }

  /**
   * AudienceLevel findMany
   */
  export type AudienceLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter, which AudienceLevels to fetch.
     */
    where?: AudienceLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudienceLevels to fetch.
     */
    orderBy?: AudienceLevelOrderByWithRelationInput | AudienceLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudienceLevels.
     */
    cursor?: AudienceLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudienceLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudienceLevels.
     */
    skip?: number
    distinct?: AudienceLevelScalarFieldEnum | AudienceLevelScalarFieldEnum[]
  }

  /**
   * AudienceLevel create
   */
  export type AudienceLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a AudienceLevel.
     */
    data: XOR<AudienceLevelCreateInput, AudienceLevelUncheckedCreateInput>
  }

  /**
   * AudienceLevel createMany
   */
  export type AudienceLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudienceLevels.
     */
    data: AudienceLevelCreateManyInput | AudienceLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudienceLevel createManyAndReturn
   */
  export type AudienceLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * The data used to create many AudienceLevels.
     */
    data: AudienceLevelCreateManyInput | AudienceLevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudienceLevel update
   */
  export type AudienceLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a AudienceLevel.
     */
    data: XOR<AudienceLevelUpdateInput, AudienceLevelUncheckedUpdateInput>
    /**
     * Choose, which AudienceLevel to update.
     */
    where: AudienceLevelWhereUniqueInput
  }

  /**
   * AudienceLevel updateMany
   */
  export type AudienceLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudienceLevels.
     */
    data: XOR<AudienceLevelUpdateManyMutationInput, AudienceLevelUncheckedUpdateManyInput>
    /**
     * Filter which AudienceLevels to update
     */
    where?: AudienceLevelWhereInput
    /**
     * Limit how many AudienceLevels to update.
     */
    limit?: number
  }

  /**
   * AudienceLevel updateManyAndReturn
   */
  export type AudienceLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * The data used to update AudienceLevels.
     */
    data: XOR<AudienceLevelUpdateManyMutationInput, AudienceLevelUncheckedUpdateManyInput>
    /**
     * Filter which AudienceLevels to update
     */
    where?: AudienceLevelWhereInput
    /**
     * Limit how many AudienceLevels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudienceLevel upsert
   */
  export type AudienceLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the AudienceLevel to update in case it exists.
     */
    where: AudienceLevelWhereUniqueInput
    /**
     * In case the AudienceLevel found by the `where` argument doesn't exist, create a new AudienceLevel with this data.
     */
    create: XOR<AudienceLevelCreateInput, AudienceLevelUncheckedCreateInput>
    /**
     * In case the AudienceLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudienceLevelUpdateInput, AudienceLevelUncheckedUpdateInput>
  }

  /**
   * AudienceLevel delete
   */
  export type AudienceLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
    /**
     * Filter which AudienceLevel to delete.
     */
    where: AudienceLevelWhereUniqueInput
  }

  /**
   * AudienceLevel deleteMany
   */
  export type AudienceLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudienceLevels to delete
     */
    where?: AudienceLevelWhereInput
    /**
     * Limit how many AudienceLevels to delete.
     */
    limit?: number
  }

  /**
   * AudienceLevel without action
   */
  export type AudienceLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceLevel
     */
    select?: AudienceLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudienceLevel
     */
    omit?: AudienceLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceLevelInclude<ExtArgs> | null
  }


  /**
   * Model Gift
   */

  export type AggregateGift = {
    _count: GiftCountAggregateOutputType | null
    _avg: GiftAvgAggregateOutputType | null
    _sum: GiftSumAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  export type GiftAvgAggregateOutputType = {
    coins: number | null
    quantity: number | null
  }

  export type GiftSumAggregateOutputType = {
    coins: number | null
    quantity: number | null
  }

  export type GiftMinAggregateOutputType = {
    id: string | null
    name: string | null
    emoji: string | null
    coins: number | null
    receiverId: string | null
    senderId: string | null
    streamSessionId: string | null
    message: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type GiftMaxAggregateOutputType = {
    id: string | null
    name: string | null
    emoji: string | null
    coins: number | null
    receiverId: string | null
    senderId: string | null
    streamSessionId: string | null
    message: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type GiftCountAggregateOutputType = {
    id: number
    name: number
    emoji: number
    coins: number
    receiverId: number
    senderId: number
    streamSessionId: number
    message: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type GiftAvgAggregateInputType = {
    coins?: true
    quantity?: true
  }

  export type GiftSumAggregateInputType = {
    coins?: true
    quantity?: true
  }

  export type GiftMinAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    coins?: true
    receiverId?: true
    senderId?: true
    streamSessionId?: true
    message?: true
    quantity?: true
    createdAt?: true
  }

  export type GiftMaxAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    coins?: true
    receiverId?: true
    senderId?: true
    streamSessionId?: true
    message?: true
    quantity?: true
    createdAt?: true
  }

  export type GiftCountAggregateInputType = {
    id?: true
    name?: true
    emoji?: true
    coins?: true
    receiverId?: true
    senderId?: true
    streamSessionId?: true
    message?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type GiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gift to aggregate.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gifts
    **/
    _count?: true | GiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftMaxAggregateInputType
  }

  export type GetGiftAggregateType<T extends GiftAggregateArgs> = {
        [P in keyof T & keyof AggregateGift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGift[P]>
      : GetScalarType<T[P], AggregateGift[P]>
  }




  export type GiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftWhereInput
    orderBy?: GiftOrderByWithAggregationInput | GiftOrderByWithAggregationInput[]
    by: GiftScalarFieldEnum[] | GiftScalarFieldEnum
    having?: GiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftCountAggregateInputType | true
    _avg?: GiftAvgAggregateInputType
    _sum?: GiftSumAggregateInputType
    _min?: GiftMinAggregateInputType
    _max?: GiftMaxAggregateInputType
  }

  export type GiftGroupByOutputType = {
    id: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    senderId: string | null
    streamSessionId: string | null
    message: string | null
    quantity: number
    createdAt: Date
    _count: GiftCountAggregateOutputType | null
    _avg: GiftAvgAggregateOutputType | null
    _sum: GiftSumAggregateOutputType | null
    _min: GiftMinAggregateOutputType | null
    _max: GiftMaxAggregateOutputType | null
  }

  type GetGiftGroupByPayload<T extends GiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftGroupByOutputType[P]>
            : GetScalarType<T[P], GiftGroupByOutputType[P]>
        }
      >
    >


  export type GiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    coins?: boolean
    receiverId?: boolean
    senderId?: boolean
    streamSessionId?: boolean
    message?: boolean
    quantity?: boolean
    createdAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    coins?: boolean
    receiverId?: boolean
    senderId?: boolean
    streamSessionId?: boolean
    message?: boolean
    quantity?: boolean
    createdAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    emoji?: boolean
    coins?: boolean
    receiverId?: boolean
    senderId?: boolean
    streamSessionId?: boolean
    message?: boolean
    quantity?: boolean
    createdAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }, ExtArgs["result"]["gift"]>

  export type GiftSelectScalar = {
    id?: boolean
    name?: boolean
    emoji?: boolean
    coins?: boolean
    receiverId?: boolean
    senderId?: boolean
    streamSessionId?: boolean
    message?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type GiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "emoji" | "coins" | "receiverId" | "senderId" | "streamSessionId" | "message" | "quantity" | "createdAt", ExtArgs["result"]["gift"]>
  export type GiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }
  export type GiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }
  export type GiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | Gift$senderArgs<ExtArgs>
    streamSession?: boolean | Gift$streamSessionArgs<ExtArgs>
  }

  export type $GiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gift"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
      streamSession: Prisma.$StreamSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      emoji: string
      coins: number
      receiverId: string
      senderId: string | null
      streamSessionId: string | null
      message: string | null
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["gift"]>
    composites: {}
  }

  type GiftGetPayload<S extends boolean | null | undefined | GiftDefaultArgs> = $Result.GetResult<Prisma.$GiftPayload, S>

  type GiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiftCountAggregateInputType | true
    }

  export interface GiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gift'], meta: { name: 'Gift' } }
    /**
     * Find zero or one Gift that matches the filter.
     * @param {GiftFindUniqueArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiftFindUniqueArgs>(args: SelectSubset<T, GiftFindUniqueArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiftFindUniqueOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiftFindUniqueOrThrowArgs>(args: SelectSubset<T, GiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiftFindFirstArgs>(args?: SelectSubset<T, GiftFindFirstArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindFirstOrThrowArgs} args - Arguments to find a Gift
     * @example
     * // Get one Gift
     * const gift = await prisma.gift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiftFindFirstOrThrowArgs>(args?: SelectSubset<T, GiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gifts
     * const gifts = await prisma.gift.findMany()
     * 
     * // Get first 10 Gifts
     * const gifts = await prisma.gift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftWithIdOnly = await prisma.gift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GiftFindManyArgs>(args?: SelectSubset<T, GiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gift.
     * @param {GiftCreateArgs} args - Arguments to create a Gift.
     * @example
     * // Create one Gift
     * const Gift = await prisma.gift.create({
     *   data: {
     *     // ... data to create a Gift
     *   }
     * })
     * 
     */
    create<T extends GiftCreateArgs>(args: SelectSubset<T, GiftCreateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gifts.
     * @param {GiftCreateManyArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiftCreateManyArgs>(args?: SelectSubset<T, GiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gifts and returns the data saved in the database.
     * @param {GiftCreateManyAndReturnArgs} args - Arguments to create many Gifts.
     * @example
     * // Create many Gifts
     * const gift = await prisma.gift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GiftCreateManyAndReturnArgs>(args?: SelectSubset<T, GiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gift.
     * @param {GiftDeleteArgs} args - Arguments to delete one Gift.
     * @example
     * // Delete one Gift
     * const Gift = await prisma.gift.delete({
     *   where: {
     *     // ... filter to delete one Gift
     *   }
     * })
     * 
     */
    delete<T extends GiftDeleteArgs>(args: SelectSubset<T, GiftDeleteArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gift.
     * @param {GiftUpdateArgs} args - Arguments to update one Gift.
     * @example
     * // Update one Gift
     * const gift = await prisma.gift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiftUpdateArgs>(args: SelectSubset<T, GiftUpdateArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gifts.
     * @param {GiftDeleteManyArgs} args - Arguments to filter Gifts to delete.
     * @example
     * // Delete a few Gifts
     * const { count } = await prisma.gift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiftDeleteManyArgs>(args?: SelectSubset<T, GiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiftUpdateManyArgs>(args: SelectSubset<T, GiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gifts and returns the data updated in the database.
     * @param {GiftUpdateManyAndReturnArgs} args - Arguments to update many Gifts.
     * @example
     * // Update many Gifts
     * const gift = await prisma.gift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gifts and only return the `id`
     * const giftWithIdOnly = await prisma.gift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GiftUpdateManyAndReturnArgs>(args: SelectSubset<T, GiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gift.
     * @param {GiftUpsertArgs} args - Arguments to update or create a Gift.
     * @example
     * // Update or create a Gift
     * const gift = await prisma.gift.upsert({
     *   create: {
     *     // ... data to create a Gift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gift we want to update
     *   }
     * })
     */
    upsert<T extends GiftUpsertArgs>(args: SelectSubset<T, GiftUpsertArgs<ExtArgs>>): Prisma__GiftClient<$Result.GetResult<Prisma.$GiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftCountArgs} args - Arguments to filter Gifts to count.
     * @example
     * // Count the number of Gifts
     * const count = await prisma.gift.count({
     *   where: {
     *     // ... the filter for the Gifts we want to count
     *   }
     * })
    **/
    count<T extends GiftCountArgs>(
      args?: Subset<T, GiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftAggregateArgs>(args: Subset<T, GiftAggregateArgs>): Prisma.PrismaPromise<GetGiftAggregateType<T>>

    /**
     * Group by Gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftGroupByArgs['orderBy'] }
        : { orderBy?: GiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gift model
   */
  readonly fields: GiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends Gift$senderArgs<ExtArgs> = {}>(args?: Subset<T, Gift$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    streamSession<T extends Gift$streamSessionArgs<ExtArgs> = {}>(args?: Subset<T, Gift$streamSessionArgs<ExtArgs>>): Prisma__StreamSessionClient<$Result.GetResult<Prisma.$StreamSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gift model
   */
  interface GiftFieldRefs {
    readonly id: FieldRef<"Gift", 'String'>
    readonly name: FieldRef<"Gift", 'String'>
    readonly emoji: FieldRef<"Gift", 'String'>
    readonly coins: FieldRef<"Gift", 'Int'>
    readonly receiverId: FieldRef<"Gift", 'String'>
    readonly senderId: FieldRef<"Gift", 'String'>
    readonly streamSessionId: FieldRef<"Gift", 'String'>
    readonly message: FieldRef<"Gift", 'String'>
    readonly quantity: FieldRef<"Gift", 'Int'>
    readonly createdAt: FieldRef<"Gift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gift findUnique
   */
  export type GiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findUniqueOrThrow
   */
  export type GiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift findFirst
   */
  export type GiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findFirstOrThrow
   */
  export type GiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gift to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gifts.
     */
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift findMany
   */
  export type GiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter, which Gifts to fetch.
     */
    where?: GiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gifts to fetch.
     */
    orderBy?: GiftOrderByWithRelationInput | GiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gifts.
     */
    cursor?: GiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gifts.
     */
    skip?: number
    distinct?: GiftScalarFieldEnum | GiftScalarFieldEnum[]
  }

  /**
   * Gift create
   */
  export type GiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Gift.
     */
    data: XOR<GiftCreateInput, GiftUncheckedCreateInput>
  }

  /**
   * Gift createMany
   */
  export type GiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gift createManyAndReturn
   */
  export type GiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to create many Gifts.
     */
    data: GiftCreateManyInput | GiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift update
   */
  export type GiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Gift.
     */
    data: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
    /**
     * Choose, which Gift to update.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift updateMany
   */
  export type GiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
  }

  /**
   * Gift updateManyAndReturn
   */
  export type GiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * The data used to update Gifts.
     */
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyInput>
    /**
     * Filter which Gifts to update
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gift upsert
   */
  export type GiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Gift to update in case it exists.
     */
    where: GiftWhereUniqueInput
    /**
     * In case the Gift found by the `where` argument doesn't exist, create a new Gift with this data.
     */
    create: XOR<GiftCreateInput, GiftUncheckedCreateInput>
    /**
     * In case the Gift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftUpdateInput, GiftUncheckedUpdateInput>
  }

  /**
   * Gift delete
   */
  export type GiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
    /**
     * Filter which Gift to delete.
     */
    where: GiftWhereUniqueInput
  }

  /**
   * Gift deleteMany
   */
  export type GiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gifts to delete
     */
    where?: GiftWhereInput
    /**
     * Limit how many Gifts to delete.
     */
    limit?: number
  }

  /**
   * Gift.sender
   */
  export type Gift$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Gift.streamSession
   */
  export type Gift$streamSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSession
     */
    select?: StreamSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSession
     */
    omit?: StreamSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSessionInclude<ExtArgs> | null
    where?: StreamSessionWhereInput
  }

  /**
   * Gift without action
   */
  export type GiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift
     */
    select?: GiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gift
     */
    omit?: GiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiftInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    rol: 'rol',
    password: 'password',
    contacto: 'contacto'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    likes: 'likes',
    userId: 'userId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const StreamSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    durationMs: 'durationMs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamSessionScalarFieldEnum = (typeof StreamSessionScalarFieldEnum)[keyof typeof StreamSessionScalarFieldEnum]


  export const StreamerMetricsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalMs: 'totalMs',
    totalSessions: 'totalSessions',
    currentLevel: 'currentLevel',
    lastLevelUpAt: 'lastLevelUpAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamerMetricsScalarFieldEnum = (typeof StreamerMetricsScalarFieldEnum)[keyof typeof StreamerMetricsScalarFieldEnum]


  export const AudienceLevelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    level: 'level',
    name: 'name',
    description: 'description',
    viewPermissions: 'viewPermissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AudienceLevelScalarFieldEnum = (typeof AudienceLevelScalarFieldEnum)[keyof typeof AudienceLevelScalarFieldEnum]


  export const GiftScalarFieldEnum: {
    id: 'id',
    name: 'name',
    emoji: 'emoji',
    coins: 'coins',
    receiverId: 'receiverId',
    senderId: 'senderId',
    streamSessionId: 'streamSessionId',
    message: 'message',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type GiftScalarFieldEnum = (typeof GiftScalarFieldEnum)[keyof typeof GiftScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    password?: StringFilter<"User"> | string
    contacto?: StringNullableFilter<"User"> | string | null
    videos?: VideoListRelationFilter
    streamSessions?: StreamSessionListRelationFilter
    streamerMetrics?: XOR<StreamerMetricsNullableScalarRelationFilter, StreamerMetricsWhereInput> | null
    audienceLevels?: AudienceLevelListRelationFilter
    giftsReceived?: GiftListRelationFilter
    giftsSent?: GiftListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    contacto?: SortOrderInput | SortOrder
    videos?: VideoOrderByRelationAggregateInput
    streamSessions?: StreamSessionOrderByRelationAggregateInput
    streamerMetrics?: StreamerMetricsOrderByWithRelationInput
    audienceLevels?: AudienceLevelOrderByRelationAggregateInput
    giftsReceived?: GiftOrderByRelationAggregateInput
    giftsSent?: GiftOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    password?: StringFilter<"User"> | string
    contacto?: StringNullableFilter<"User"> | string | null
    videos?: VideoListRelationFilter
    streamSessions?: StreamSessionListRelationFilter
    streamerMetrics?: XOR<StreamerMetricsNullableScalarRelationFilter, StreamerMetricsWhereInput> | null
    audienceLevels?: AudienceLevelListRelationFilter
    giftsReceived?: GiftListRelationFilter
    giftsSent?: GiftListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "nombre">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    contacto?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    rol?: EnumRolWithAggregatesFilter<"User"> | $Enums.Rol
    password?: StringWithAggregatesFilter<"User"> | string
    contacto?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    likes?: IntFilter<"Video"> | number
    userId?: StringFilter<"Video"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    likes?: IntFilter<"Video"> | number
    userId?: StringFilter<"Video"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    title?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    likes?: IntWithAggregatesFilter<"Video"> | number
    userId?: StringWithAggregatesFilter<"Video"> | string
  }

  export type StreamSessionWhereInput = {
    AND?: StreamSessionWhereInput | StreamSessionWhereInput[]
    OR?: StreamSessionWhereInput[]
    NOT?: StreamSessionWhereInput | StreamSessionWhereInput[]
    id?: StringFilter<"StreamSession"> | string
    userId?: StringFilter<"StreamSession"> | string
    startTime?: DateTimeFilter<"StreamSession"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamSession"> | Date | string | null
    durationMs?: IntFilter<"StreamSession"> | number
    createdAt?: DateTimeFilter<"StreamSession"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gifts?: GiftListRelationFilter
  }

  export type StreamSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    gifts?: GiftOrderByRelationAggregateInput
  }

  export type StreamSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamSessionWhereInput | StreamSessionWhereInput[]
    OR?: StreamSessionWhereInput[]
    NOT?: StreamSessionWhereInput | StreamSessionWhereInput[]
    userId?: StringFilter<"StreamSession"> | string
    startTime?: DateTimeFilter<"StreamSession"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamSession"> | Date | string | null
    durationMs?: IntFilter<"StreamSession"> | number
    createdAt?: DateTimeFilter<"StreamSession"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gifts?: GiftListRelationFilter
  }, "id">

  export type StreamSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreamSessionCountOrderByAggregateInput
    _avg?: StreamSessionAvgOrderByAggregateInput
    _max?: StreamSessionMaxOrderByAggregateInput
    _min?: StreamSessionMinOrderByAggregateInput
    _sum?: StreamSessionSumOrderByAggregateInput
  }

  export type StreamSessionScalarWhereWithAggregatesInput = {
    AND?: StreamSessionScalarWhereWithAggregatesInput | StreamSessionScalarWhereWithAggregatesInput[]
    OR?: StreamSessionScalarWhereWithAggregatesInput[]
    NOT?: StreamSessionScalarWhereWithAggregatesInput | StreamSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamSession"> | string
    userId?: StringWithAggregatesFilter<"StreamSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"StreamSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"StreamSession"> | Date | string | null
    durationMs?: IntWithAggregatesFilter<"StreamSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StreamSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreamSession"> | Date | string
  }

  export type StreamerMetricsWhereInput = {
    AND?: StreamerMetricsWhereInput | StreamerMetricsWhereInput[]
    OR?: StreamerMetricsWhereInput[]
    NOT?: StreamerMetricsWhereInput | StreamerMetricsWhereInput[]
    id?: StringFilter<"StreamerMetrics"> | string
    userId?: StringFilter<"StreamerMetrics"> | string
    totalMs?: IntFilter<"StreamerMetrics"> | number
    totalSessions?: IntFilter<"StreamerMetrics"> | number
    currentLevel?: IntFilter<"StreamerMetrics"> | number
    lastLevelUpAt?: DateTimeNullableFilter<"StreamerMetrics"> | Date | string | null
    createdAt?: DateTimeFilter<"StreamerMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"StreamerMetrics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreamerMetricsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
    lastLevelUpAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StreamerMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StreamerMetricsWhereInput | StreamerMetricsWhereInput[]
    OR?: StreamerMetricsWhereInput[]
    NOT?: StreamerMetricsWhereInput | StreamerMetricsWhereInput[]
    totalMs?: IntFilter<"StreamerMetrics"> | number
    totalSessions?: IntFilter<"StreamerMetrics"> | number
    currentLevel?: IntFilter<"StreamerMetrics"> | number
    lastLevelUpAt?: DateTimeNullableFilter<"StreamerMetrics"> | Date | string | null
    createdAt?: DateTimeFilter<"StreamerMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"StreamerMetrics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StreamerMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
    lastLevelUpAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreamerMetricsCountOrderByAggregateInput
    _avg?: StreamerMetricsAvgOrderByAggregateInput
    _max?: StreamerMetricsMaxOrderByAggregateInput
    _min?: StreamerMetricsMinOrderByAggregateInput
    _sum?: StreamerMetricsSumOrderByAggregateInput
  }

  export type StreamerMetricsScalarWhereWithAggregatesInput = {
    AND?: StreamerMetricsScalarWhereWithAggregatesInput | StreamerMetricsScalarWhereWithAggregatesInput[]
    OR?: StreamerMetricsScalarWhereWithAggregatesInput[]
    NOT?: StreamerMetricsScalarWhereWithAggregatesInput | StreamerMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamerMetrics"> | string
    userId?: StringWithAggregatesFilter<"StreamerMetrics"> | string
    totalMs?: IntWithAggregatesFilter<"StreamerMetrics"> | number
    totalSessions?: IntWithAggregatesFilter<"StreamerMetrics"> | number
    currentLevel?: IntWithAggregatesFilter<"StreamerMetrics"> | number
    lastLevelUpAt?: DateTimeNullableWithAggregatesFilter<"StreamerMetrics"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StreamerMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreamerMetrics"> | Date | string
  }

  export type AudienceLevelWhereInput = {
    AND?: AudienceLevelWhereInput | AudienceLevelWhereInput[]
    OR?: AudienceLevelWhereInput[]
    NOT?: AudienceLevelWhereInput | AudienceLevelWhereInput[]
    id?: StringFilter<"AudienceLevel"> | string
    userId?: StringFilter<"AudienceLevel"> | string
    level?: IntFilter<"AudienceLevel"> | number
    name?: StringFilter<"AudienceLevel"> | string
    description?: StringNullableFilter<"AudienceLevel"> | string | null
    viewPermissions?: JsonNullableFilter<"AudienceLevel">
    createdAt?: DateTimeFilter<"AudienceLevel"> | Date | string
    updatedAt?: DateTimeFilter<"AudienceLevel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AudienceLevelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    viewPermissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AudienceLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_level?: AudienceLevelUserIdLevelCompoundUniqueInput
    AND?: AudienceLevelWhereInput | AudienceLevelWhereInput[]
    OR?: AudienceLevelWhereInput[]
    NOT?: AudienceLevelWhereInput | AudienceLevelWhereInput[]
    userId?: StringFilter<"AudienceLevel"> | string
    level?: IntFilter<"AudienceLevel"> | number
    name?: StringFilter<"AudienceLevel"> | string
    description?: StringNullableFilter<"AudienceLevel"> | string | null
    viewPermissions?: JsonNullableFilter<"AudienceLevel">
    createdAt?: DateTimeFilter<"AudienceLevel"> | Date | string
    updatedAt?: DateTimeFilter<"AudienceLevel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_level">

  export type AudienceLevelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    viewPermissions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AudienceLevelCountOrderByAggregateInput
    _avg?: AudienceLevelAvgOrderByAggregateInput
    _max?: AudienceLevelMaxOrderByAggregateInput
    _min?: AudienceLevelMinOrderByAggregateInput
    _sum?: AudienceLevelSumOrderByAggregateInput
  }

  export type AudienceLevelScalarWhereWithAggregatesInput = {
    AND?: AudienceLevelScalarWhereWithAggregatesInput | AudienceLevelScalarWhereWithAggregatesInput[]
    OR?: AudienceLevelScalarWhereWithAggregatesInput[]
    NOT?: AudienceLevelScalarWhereWithAggregatesInput | AudienceLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudienceLevel"> | string
    userId?: StringWithAggregatesFilter<"AudienceLevel"> | string
    level?: IntWithAggregatesFilter<"AudienceLevel"> | number
    name?: StringWithAggregatesFilter<"AudienceLevel"> | string
    description?: StringNullableWithAggregatesFilter<"AudienceLevel"> | string | null
    viewPermissions?: JsonNullableWithAggregatesFilter<"AudienceLevel">
    createdAt?: DateTimeWithAggregatesFilter<"AudienceLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AudienceLevel"> | Date | string
  }

  export type GiftWhereInput = {
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    id?: StringFilter<"Gift"> | string
    name?: StringFilter<"Gift"> | string
    emoji?: StringFilter<"Gift"> | string
    coins?: IntFilter<"Gift"> | number
    receiverId?: StringFilter<"Gift"> | string
    senderId?: StringNullableFilter<"Gift"> | string | null
    streamSessionId?: StringNullableFilter<"Gift"> | string | null
    message?: StringNullableFilter<"Gift"> | string | null
    quantity?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    streamSession?: XOR<StreamSessionNullableScalarRelationFilter, StreamSessionWhereInput> | null
  }

  export type GiftOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    coins?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    streamSessionId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    streamSession?: StreamSessionOrderByWithRelationInput
  }

  export type GiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GiftWhereInput | GiftWhereInput[]
    OR?: GiftWhereInput[]
    NOT?: GiftWhereInput | GiftWhereInput[]
    name?: StringFilter<"Gift"> | string
    emoji?: StringFilter<"Gift"> | string
    coins?: IntFilter<"Gift"> | number
    receiverId?: StringFilter<"Gift"> | string
    senderId?: StringNullableFilter<"Gift"> | string | null
    streamSessionId?: StringNullableFilter<"Gift"> | string | null
    message?: StringNullableFilter<"Gift"> | string | null
    quantity?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    streamSession?: XOR<StreamSessionNullableScalarRelationFilter, StreamSessionWhereInput> | null
  }, "id">

  export type GiftOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    coins?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    streamSessionId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: GiftCountOrderByAggregateInput
    _avg?: GiftAvgOrderByAggregateInput
    _max?: GiftMaxOrderByAggregateInput
    _min?: GiftMinOrderByAggregateInput
    _sum?: GiftSumOrderByAggregateInput
  }

  export type GiftScalarWhereWithAggregatesInput = {
    AND?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    OR?: GiftScalarWhereWithAggregatesInput[]
    NOT?: GiftScalarWhereWithAggregatesInput | GiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gift"> | string
    name?: StringWithAggregatesFilter<"Gift"> | string
    emoji?: StringWithAggregatesFilter<"Gift"> | string
    coins?: IntWithAggregatesFilter<"Gift"> | number
    receiverId?: StringWithAggregatesFilter<"Gift"> | string
    senderId?: StringNullableWithAggregatesFilter<"Gift"> | string | null
    streamSessionId?: StringNullableWithAggregatesFilter<"Gift"> | string | null
    message?: StringNullableWithAggregatesFilter<"Gift"> | string | null
    quantity?: IntWithAggregatesFilter<"Gift"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Gift"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCreateInput = {
    title: string
    url: string
    likes?: number
    user: UserCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    title: string
    url: string
    likes?: number
    userId: string
  }

  export type VideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyInput = {
    id?: number
    title: string
    url: string
    likes?: number
    userId: string
  }

  export type VideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamSessionCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStreamSessionsInput
    gifts?: GiftCreateNestedManyWithoutStreamSessionInput
  }

  export type StreamSessionUncheckedCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: GiftUncheckedCreateNestedManyWithoutStreamSessionInput
  }

  export type StreamSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreamSessionsNestedInput
    gifts?: GiftUpdateManyWithoutStreamSessionNestedInput
  }

  export type StreamSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUncheckedUpdateManyWithoutStreamSessionNestedInput
  }

  export type StreamSessionCreateManyInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamerMetricsCreateInput = {
    id?: string
    totalMs?: number
    totalSessions?: number
    currentLevel?: number
    lastLevelUpAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStreamerMetricsInput
  }

  export type StreamerMetricsUncheckedCreateInput = {
    id?: string
    userId: string
    totalMs?: number
    totalSessions?: number
    currentLevel?: number
    lastLevelUpAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamerMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreamerMetricsNestedInput
  }

  export type StreamerMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamerMetricsCreateManyInput = {
    id?: string
    userId: string
    totalMs?: number
    totalSessions?: number
    currentLevel?: number
    lastLevelUpAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamerMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamerMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelCreateInput = {
    id?: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAudienceLevelsInput
  }

  export type AudienceLevelUncheckedCreateInput = {
    id?: string
    userId: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienceLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudienceLevelsNestedInput
  }

  export type AudienceLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelCreateManyInput = {
    id?: string
    userId: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienceLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftCreateInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    message?: string | null
    quantity?: number
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutGiftsReceivedInput
    sender?: UserCreateNestedOneWithoutGiftsSentInput
    streamSession?: StreamSessionCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    senderId?: string | null
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutGiftsReceivedNestedInput
    sender?: UserUpdateOneWithoutGiftsSentNestedInput
    streamSession?: StreamSessionUpdateOneWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftCreateManyInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    senderId?: string | null
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type StreamSessionListRelationFilter = {
    every?: StreamSessionWhereInput
    some?: StreamSessionWhereInput
    none?: StreamSessionWhereInput
  }

  export type StreamerMetricsNullableScalarRelationFilter = {
    is?: StreamerMetricsWhereInput | null
    isNot?: StreamerMetricsWhereInput | null
  }

  export type AudienceLevelListRelationFilter = {
    every?: AudienceLevelWhereInput
    some?: AudienceLevelWhereInput
    none?: AudienceLevelWhereInput
  }

  export type GiftListRelationFilter = {
    every?: GiftWhereInput
    some?: GiftWhereInput
    none?: GiftWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudienceLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    contacto?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    contacto?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    password?: SortOrder
    contacto?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StreamSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSessionAvgOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type StreamSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSessionSumOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StreamerMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
    lastLevelUpAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamerMetricsAvgOrderByAggregateInput = {
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
  }

  export type StreamerMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
    lastLevelUpAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamerMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
    lastLevelUpAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamerMetricsSumOrderByAggregateInput = {
    totalMs?: SortOrder
    totalSessions?: SortOrder
    currentLevel?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AudienceLevelUserIdLevelCompoundUniqueInput = {
    userId: string
    level: number
  }

  export type AudienceLevelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    description?: SortOrder
    viewPermissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienceLevelAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type AudienceLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienceLevelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienceLevelSumOrderByAggregateInput = {
    level?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StreamSessionNullableScalarRelationFilter = {
    is?: StreamSessionWhereInput | null
    isNot?: StreamSessionWhereInput | null
  }

  export type GiftCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    coins?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    streamSessionId?: SortOrder
    message?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftAvgOrderByAggregateInput = {
    coins?: SortOrder
    quantity?: SortOrder
  }

  export type GiftMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    coins?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    streamSessionId?: SortOrder
    message?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    coins?: SortOrder
    receiverId?: SortOrder
    senderId?: SortOrder
    streamSessionId?: SortOrder
    message?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftSumOrderByAggregateInput = {
    coins?: SortOrder
    quantity?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type StreamSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput> | StreamSessionCreateWithoutUserInput[] | StreamSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSessionCreateOrConnectWithoutUserInput | StreamSessionCreateOrConnectWithoutUserInput[]
    createMany?: StreamSessionCreateManyUserInputEnvelope
    connect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
  }

  export type StreamerMetricsCreateNestedOneWithoutUserInput = {
    create?: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreamerMetricsCreateOrConnectWithoutUserInput
    connect?: StreamerMetricsWhereUniqueInput
  }

  export type AudienceLevelCreateNestedManyWithoutUserInput = {
    create?: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput> | AudienceLevelCreateWithoutUserInput[] | AudienceLevelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceLevelCreateOrConnectWithoutUserInput | AudienceLevelCreateOrConnectWithoutUserInput[]
    createMany?: AudienceLevelCreateManyUserInputEnvelope
    connect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
  }

  export type GiftCreateNestedManyWithoutReceiverInput = {
    create?: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput> | GiftCreateWithoutReceiverInput[] | GiftUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutReceiverInput | GiftCreateOrConnectWithoutReceiverInput[]
    createMany?: GiftCreateManyReceiverInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type GiftCreateNestedManyWithoutSenderInput = {
    create?: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput> | GiftCreateWithoutSenderInput[] | GiftUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSenderInput | GiftCreateOrConnectWithoutSenderInput[]
    createMany?: GiftCreateManySenderInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type StreamSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput> | StreamSessionCreateWithoutUserInput[] | StreamSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSessionCreateOrConnectWithoutUserInput | StreamSessionCreateOrConnectWithoutUserInput[]
    createMany?: StreamSessionCreateManyUserInputEnvelope
    connect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
  }

  export type StreamerMetricsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreamerMetricsCreateOrConnectWithoutUserInput
    connect?: StreamerMetricsWhereUniqueInput
  }

  export type AudienceLevelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput> | AudienceLevelCreateWithoutUserInput[] | AudienceLevelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceLevelCreateOrConnectWithoutUserInput | AudienceLevelCreateOrConnectWithoutUserInput[]
    createMany?: AudienceLevelCreateManyUserInputEnvelope
    connect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput> | GiftCreateWithoutReceiverInput[] | GiftUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutReceiverInput | GiftCreateOrConnectWithoutReceiverInput[]
    createMany?: GiftCreateManyReceiverInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput> | GiftCreateWithoutSenderInput[] | GiftUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSenderInput | GiftCreateOrConnectWithoutSenderInput[]
    createMany?: GiftCreateManySenderInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type StreamSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput> | StreamSessionCreateWithoutUserInput[] | StreamSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSessionCreateOrConnectWithoutUserInput | StreamSessionCreateOrConnectWithoutUserInput[]
    upsert?: StreamSessionUpsertWithWhereUniqueWithoutUserInput | StreamSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSessionCreateManyUserInputEnvelope
    set?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    disconnect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    delete?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    connect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    update?: StreamSessionUpdateWithWhereUniqueWithoutUserInput | StreamSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSessionUpdateManyWithWhereWithoutUserInput | StreamSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSessionScalarWhereInput | StreamSessionScalarWhereInput[]
  }

  export type StreamerMetricsUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreamerMetricsCreateOrConnectWithoutUserInput
    upsert?: StreamerMetricsUpsertWithoutUserInput
    disconnect?: StreamerMetricsWhereInput | boolean
    delete?: StreamerMetricsWhereInput | boolean
    connect?: StreamerMetricsWhereUniqueInput
    update?: XOR<XOR<StreamerMetricsUpdateToOneWithWhereWithoutUserInput, StreamerMetricsUpdateWithoutUserInput>, StreamerMetricsUncheckedUpdateWithoutUserInput>
  }

  export type AudienceLevelUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput> | AudienceLevelCreateWithoutUserInput[] | AudienceLevelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceLevelCreateOrConnectWithoutUserInput | AudienceLevelCreateOrConnectWithoutUserInput[]
    upsert?: AudienceLevelUpsertWithWhereUniqueWithoutUserInput | AudienceLevelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudienceLevelCreateManyUserInputEnvelope
    set?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    disconnect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    delete?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    connect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    update?: AudienceLevelUpdateWithWhereUniqueWithoutUserInput | AudienceLevelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudienceLevelUpdateManyWithWhereWithoutUserInput | AudienceLevelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudienceLevelScalarWhereInput | AudienceLevelScalarWhereInput[]
  }

  export type GiftUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput> | GiftCreateWithoutReceiverInput[] | GiftUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutReceiverInput | GiftCreateOrConnectWithoutReceiverInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutReceiverInput | GiftUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: GiftCreateManyReceiverInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutReceiverInput | GiftUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutReceiverInput | GiftUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type GiftUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput> | GiftCreateWithoutSenderInput[] | GiftUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSenderInput | GiftCreateOrConnectWithoutSenderInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutSenderInput | GiftUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GiftCreateManySenderInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutSenderInput | GiftUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutSenderInput | GiftUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type StreamSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput> | StreamSessionCreateWithoutUserInput[] | StreamSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSessionCreateOrConnectWithoutUserInput | StreamSessionCreateOrConnectWithoutUserInput[]
    upsert?: StreamSessionUpsertWithWhereUniqueWithoutUserInput | StreamSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSessionCreateManyUserInputEnvelope
    set?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    disconnect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    delete?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    connect?: StreamSessionWhereUniqueInput | StreamSessionWhereUniqueInput[]
    update?: StreamSessionUpdateWithWhereUniqueWithoutUserInput | StreamSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSessionUpdateManyWithWhereWithoutUserInput | StreamSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSessionScalarWhereInput | StreamSessionScalarWhereInput[]
  }

  export type StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StreamerMetricsCreateOrConnectWithoutUserInput
    upsert?: StreamerMetricsUpsertWithoutUserInput
    disconnect?: StreamerMetricsWhereInput | boolean
    delete?: StreamerMetricsWhereInput | boolean
    connect?: StreamerMetricsWhereUniqueInput
    update?: XOR<XOR<StreamerMetricsUpdateToOneWithWhereWithoutUserInput, StreamerMetricsUpdateWithoutUserInput>, StreamerMetricsUncheckedUpdateWithoutUserInput>
  }

  export type AudienceLevelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput> | AudienceLevelCreateWithoutUserInput[] | AudienceLevelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceLevelCreateOrConnectWithoutUserInput | AudienceLevelCreateOrConnectWithoutUserInput[]
    upsert?: AudienceLevelUpsertWithWhereUniqueWithoutUserInput | AudienceLevelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudienceLevelCreateManyUserInputEnvelope
    set?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    disconnect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    delete?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    connect?: AudienceLevelWhereUniqueInput | AudienceLevelWhereUniqueInput[]
    update?: AudienceLevelUpdateWithWhereUniqueWithoutUserInput | AudienceLevelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudienceLevelUpdateManyWithWhereWithoutUserInput | AudienceLevelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudienceLevelScalarWhereInput | AudienceLevelScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput> | GiftCreateWithoutReceiverInput[] | GiftUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutReceiverInput | GiftCreateOrConnectWithoutReceiverInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutReceiverInput | GiftUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: GiftCreateManyReceiverInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutReceiverInput | GiftUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutReceiverInput | GiftUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput> | GiftCreateWithoutSenderInput[] | GiftUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutSenderInput | GiftCreateOrConnectWithoutSenderInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutSenderInput | GiftUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GiftCreateManySenderInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutSenderInput | GiftUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutSenderInput | GiftUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserCreateNestedOneWithoutStreamSessionsInput = {
    create?: XOR<UserCreateWithoutStreamSessionsInput, UserUncheckedCreateWithoutStreamSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type GiftCreateNestedManyWithoutStreamSessionInput = {
    create?: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput> | GiftCreateWithoutStreamSessionInput[] | GiftUncheckedCreateWithoutStreamSessionInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutStreamSessionInput | GiftCreateOrConnectWithoutStreamSessionInput[]
    createMany?: GiftCreateManyStreamSessionInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type GiftUncheckedCreateNestedManyWithoutStreamSessionInput = {
    create?: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput> | GiftCreateWithoutStreamSessionInput[] | GiftUncheckedCreateWithoutStreamSessionInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutStreamSessionInput | GiftCreateOrConnectWithoutStreamSessionInput[]
    createMany?: GiftCreateManyStreamSessionInputEnvelope
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutStreamSessionsNestedInput = {
    create?: XOR<UserCreateWithoutStreamSessionsInput, UserUncheckedCreateWithoutStreamSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamSessionsInput
    upsert?: UserUpsertWithoutStreamSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamSessionsInput, UserUpdateWithoutStreamSessionsInput>, UserUncheckedUpdateWithoutStreamSessionsInput>
  }

  export type GiftUpdateManyWithoutStreamSessionNestedInput = {
    create?: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput> | GiftCreateWithoutStreamSessionInput[] | GiftUncheckedCreateWithoutStreamSessionInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutStreamSessionInput | GiftCreateOrConnectWithoutStreamSessionInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutStreamSessionInput | GiftUpsertWithWhereUniqueWithoutStreamSessionInput[]
    createMany?: GiftCreateManyStreamSessionInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutStreamSessionInput | GiftUpdateWithWhereUniqueWithoutStreamSessionInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutStreamSessionInput | GiftUpdateManyWithWhereWithoutStreamSessionInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type GiftUncheckedUpdateManyWithoutStreamSessionNestedInput = {
    create?: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput> | GiftCreateWithoutStreamSessionInput[] | GiftUncheckedCreateWithoutStreamSessionInput[]
    connectOrCreate?: GiftCreateOrConnectWithoutStreamSessionInput | GiftCreateOrConnectWithoutStreamSessionInput[]
    upsert?: GiftUpsertWithWhereUniqueWithoutStreamSessionInput | GiftUpsertWithWhereUniqueWithoutStreamSessionInput[]
    createMany?: GiftCreateManyStreamSessionInputEnvelope
    set?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    disconnect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    delete?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    connect?: GiftWhereUniqueInput | GiftWhereUniqueInput[]
    update?: GiftUpdateWithWhereUniqueWithoutStreamSessionInput | GiftUpdateWithWhereUniqueWithoutStreamSessionInput[]
    updateMany?: GiftUpdateManyWithWhereWithoutStreamSessionInput | GiftUpdateManyWithWhereWithoutStreamSessionInput[]
    deleteMany?: GiftScalarWhereInput | GiftScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStreamerMetricsInput = {
    create?: XOR<UserCreateWithoutStreamerMetricsInput, UserUncheckedCreateWithoutStreamerMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamerMetricsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStreamerMetricsNestedInput = {
    create?: XOR<UserCreateWithoutStreamerMetricsInput, UserUncheckedCreateWithoutStreamerMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamerMetricsInput
    upsert?: UserUpsertWithoutStreamerMetricsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamerMetricsInput, UserUpdateWithoutStreamerMetricsInput>, UserUncheckedUpdateWithoutStreamerMetricsInput>
  }

  export type UserCreateNestedOneWithoutAudienceLevelsInput = {
    create?: XOR<UserCreateWithoutAudienceLevelsInput, UserUncheckedCreateWithoutAudienceLevelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudienceLevelsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAudienceLevelsNestedInput = {
    create?: XOR<UserCreateWithoutAudienceLevelsInput, UserUncheckedCreateWithoutAudienceLevelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudienceLevelsInput
    upsert?: UserUpsertWithoutAudienceLevelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAudienceLevelsInput, UserUpdateWithoutAudienceLevelsInput>, UserUncheckedUpdateWithoutAudienceLevelsInput>
  }

  export type UserCreateNestedOneWithoutGiftsReceivedInput = {
    create?: XOR<UserCreateWithoutGiftsReceivedInput, UserUncheckedCreateWithoutGiftsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGiftsSentInput = {
    create?: XOR<UserCreateWithoutGiftsSentInput, UserUncheckedCreateWithoutGiftsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsSentInput
    connect?: UserWhereUniqueInput
  }

  export type StreamSessionCreateNestedOneWithoutGiftsInput = {
    create?: XOR<StreamSessionCreateWithoutGiftsInput, StreamSessionUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: StreamSessionCreateOrConnectWithoutGiftsInput
    connect?: StreamSessionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGiftsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutGiftsReceivedInput, UserUncheckedCreateWithoutGiftsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsReceivedInput
    upsert?: UserUpsertWithoutGiftsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGiftsReceivedInput, UserUpdateWithoutGiftsReceivedInput>, UserUncheckedUpdateWithoutGiftsReceivedInput>
  }

  export type UserUpdateOneWithoutGiftsSentNestedInput = {
    create?: XOR<UserCreateWithoutGiftsSentInput, UserUncheckedCreateWithoutGiftsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiftsSentInput
    upsert?: UserUpsertWithoutGiftsSentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGiftsSentInput, UserUpdateWithoutGiftsSentInput>, UserUncheckedUpdateWithoutGiftsSentInput>
  }

  export type StreamSessionUpdateOneWithoutGiftsNestedInput = {
    create?: XOR<StreamSessionCreateWithoutGiftsInput, StreamSessionUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: StreamSessionCreateOrConnectWithoutGiftsInput
    upsert?: StreamSessionUpsertWithoutGiftsInput
    disconnect?: StreamSessionWhereInput | boolean
    delete?: StreamSessionWhereInput | boolean
    connect?: StreamSessionWhereUniqueInput
    update?: XOR<XOR<StreamSessionUpdateToOneWithWhereWithoutGiftsInput, StreamSessionUpdateWithoutGiftsInput>, StreamSessionUncheckedUpdateWithoutGiftsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VideoCreateWithoutUserInput = {
    title: string
    url: string
    likes?: number
  }

  export type VideoUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    url: string
    likes?: number
  }

  export type VideoCreateOrConnectWithoutUserInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoCreateManyUserInputEnvelope = {
    data: VideoCreateManyUserInput | VideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamSessionCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: GiftCreateNestedManyWithoutStreamSessionInput
  }

  export type StreamSessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: GiftUncheckedCreateNestedManyWithoutStreamSessionInput
  }

  export type StreamSessionCreateOrConnectWithoutUserInput = {
    where: StreamSessionWhereUniqueInput
    create: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput>
  }

  export type StreamSessionCreateManyUserInputEnvelope = {
    data: StreamSessionCreateManyUserInput | StreamSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamerMetricsCreateWithoutUserInput = {
    id?: string
    totalMs?: number
    totalSessions?: number
    currentLevel?: number
    lastLevelUpAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamerMetricsUncheckedCreateWithoutUserInput = {
    id?: string
    totalMs?: number
    totalSessions?: number
    currentLevel?: number
    lastLevelUpAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamerMetricsCreateOrConnectWithoutUserInput = {
    where: StreamerMetricsWhereUniqueInput
    create: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
  }

  export type AudienceLevelCreateWithoutUserInput = {
    id?: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienceLevelUncheckedCreateWithoutUserInput = {
    id?: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienceLevelCreateOrConnectWithoutUserInput = {
    where: AudienceLevelWhereUniqueInput
    create: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput>
  }

  export type AudienceLevelCreateManyUserInputEnvelope = {
    data: AudienceLevelCreateManyUserInput | AudienceLevelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GiftCreateWithoutReceiverInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    message?: string | null
    quantity?: number
    createdAt?: Date | string
    sender?: UserCreateNestedOneWithoutGiftsSentInput
    streamSession?: StreamSessionCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateWithoutReceiverInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    senderId?: string | null
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftCreateOrConnectWithoutReceiverInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput>
  }

  export type GiftCreateManyReceiverInputEnvelope = {
    data: GiftCreateManyReceiverInput | GiftCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type GiftCreateWithoutSenderInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    message?: string | null
    quantity?: number
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutGiftsReceivedInput
    streamSession?: StreamSessionCreateNestedOneWithoutGiftsInput
  }

  export type GiftUncheckedCreateWithoutSenderInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftCreateOrConnectWithoutSenderInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput>
  }

  export type GiftCreateManySenderInputEnvelope = {
    data: GiftCreateManySenderInput | GiftCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
  }

  export type VideoUpdateManyWithWhereWithoutUserInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    likes?: IntFilter<"Video"> | number
    userId?: StringFilter<"Video"> | string
  }

  export type StreamSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamSessionWhereUniqueInput
    update: XOR<StreamSessionUpdateWithoutUserInput, StreamSessionUncheckedUpdateWithoutUserInput>
    create: XOR<StreamSessionCreateWithoutUserInput, StreamSessionUncheckedCreateWithoutUserInput>
  }

  export type StreamSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamSessionWhereUniqueInput
    data: XOR<StreamSessionUpdateWithoutUserInput, StreamSessionUncheckedUpdateWithoutUserInput>
  }

  export type StreamSessionUpdateManyWithWhereWithoutUserInput = {
    where: StreamSessionScalarWhereInput
    data: XOR<StreamSessionUpdateManyMutationInput, StreamSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamSessionScalarWhereInput = {
    AND?: StreamSessionScalarWhereInput | StreamSessionScalarWhereInput[]
    OR?: StreamSessionScalarWhereInput[]
    NOT?: StreamSessionScalarWhereInput | StreamSessionScalarWhereInput[]
    id?: StringFilter<"StreamSession"> | string
    userId?: StringFilter<"StreamSession"> | string
    startTime?: DateTimeFilter<"StreamSession"> | Date | string
    endTime?: DateTimeNullableFilter<"StreamSession"> | Date | string | null
    durationMs?: IntFilter<"StreamSession"> | number
    createdAt?: DateTimeFilter<"StreamSession"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSession"> | Date | string
  }

  export type StreamerMetricsUpsertWithoutUserInput = {
    update: XOR<StreamerMetricsUpdateWithoutUserInput, StreamerMetricsUncheckedUpdateWithoutUserInput>
    create: XOR<StreamerMetricsCreateWithoutUserInput, StreamerMetricsUncheckedCreateWithoutUserInput>
    where?: StreamerMetricsWhereInput
  }

  export type StreamerMetricsUpdateToOneWithWhereWithoutUserInput = {
    where?: StreamerMetricsWhereInput
    data: XOR<StreamerMetricsUpdateWithoutUserInput, StreamerMetricsUncheckedUpdateWithoutUserInput>
  }

  export type StreamerMetricsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamerMetricsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMs?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    lastLevelUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelUpsertWithWhereUniqueWithoutUserInput = {
    where: AudienceLevelWhereUniqueInput
    update: XOR<AudienceLevelUpdateWithoutUserInput, AudienceLevelUncheckedUpdateWithoutUserInput>
    create: XOR<AudienceLevelCreateWithoutUserInput, AudienceLevelUncheckedCreateWithoutUserInput>
  }

  export type AudienceLevelUpdateWithWhereUniqueWithoutUserInput = {
    where: AudienceLevelWhereUniqueInput
    data: XOR<AudienceLevelUpdateWithoutUserInput, AudienceLevelUncheckedUpdateWithoutUserInput>
  }

  export type AudienceLevelUpdateManyWithWhereWithoutUserInput = {
    where: AudienceLevelScalarWhereInput
    data: XOR<AudienceLevelUpdateManyMutationInput, AudienceLevelUncheckedUpdateManyWithoutUserInput>
  }

  export type AudienceLevelScalarWhereInput = {
    AND?: AudienceLevelScalarWhereInput | AudienceLevelScalarWhereInput[]
    OR?: AudienceLevelScalarWhereInput[]
    NOT?: AudienceLevelScalarWhereInput | AudienceLevelScalarWhereInput[]
    id?: StringFilter<"AudienceLevel"> | string
    userId?: StringFilter<"AudienceLevel"> | string
    level?: IntFilter<"AudienceLevel"> | number
    name?: StringFilter<"AudienceLevel"> | string
    description?: StringNullableFilter<"AudienceLevel"> | string | null
    viewPermissions?: JsonNullableFilter<"AudienceLevel">
    createdAt?: DateTimeFilter<"AudienceLevel"> | Date | string
    updatedAt?: DateTimeFilter<"AudienceLevel"> | Date | string
  }

  export type GiftUpsertWithWhereUniqueWithoutReceiverInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutReceiverInput, GiftUncheckedUpdateWithoutReceiverInput>
    create: XOR<GiftCreateWithoutReceiverInput, GiftUncheckedCreateWithoutReceiverInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutReceiverInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutReceiverInput, GiftUncheckedUpdateWithoutReceiverInput>
  }

  export type GiftUpdateManyWithWhereWithoutReceiverInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutReceiverInput>
  }

  export type GiftScalarWhereInput = {
    AND?: GiftScalarWhereInput | GiftScalarWhereInput[]
    OR?: GiftScalarWhereInput[]
    NOT?: GiftScalarWhereInput | GiftScalarWhereInput[]
    id?: StringFilter<"Gift"> | string
    name?: StringFilter<"Gift"> | string
    emoji?: StringFilter<"Gift"> | string
    coins?: IntFilter<"Gift"> | number
    receiverId?: StringFilter<"Gift"> | string
    senderId?: StringNullableFilter<"Gift"> | string | null
    streamSessionId?: StringNullableFilter<"Gift"> | string | null
    message?: StringNullableFilter<"Gift"> | string | null
    quantity?: IntFilter<"Gift"> | number
    createdAt?: DateTimeFilter<"Gift"> | Date | string
  }

  export type GiftUpsertWithWhereUniqueWithoutSenderInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutSenderInput, GiftUncheckedUpdateWithoutSenderInput>
    create: XOR<GiftCreateWithoutSenderInput, GiftUncheckedCreateWithoutSenderInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutSenderInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutSenderInput, GiftUncheckedUpdateWithoutSenderInput>
  }

  export type GiftUpdateManyWithWhereWithoutSenderInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutSenderInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStreamSessionsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamSessionsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamSessionsInput, UserUncheckedCreateWithoutStreamSessionsInput>
  }

  export type GiftCreateWithoutStreamSessionInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    message?: string | null
    quantity?: number
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutGiftsReceivedInput
    sender?: UserCreateNestedOneWithoutGiftsSentInput
  }

  export type GiftUncheckedCreateWithoutStreamSessionInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    senderId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftCreateOrConnectWithoutStreamSessionInput = {
    where: GiftWhereUniqueInput
    create: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput>
  }

  export type GiftCreateManyStreamSessionInputEnvelope = {
    data: GiftCreateManyStreamSessionInput | GiftCreateManyStreamSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStreamSessionsInput = {
    update: XOR<UserUpdateWithoutStreamSessionsInput, UserUncheckedUpdateWithoutStreamSessionsInput>
    create: XOR<UserCreateWithoutStreamSessionsInput, UserUncheckedCreateWithoutStreamSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamSessionsInput, UserUncheckedUpdateWithoutStreamSessionsInput>
  }

  export type UserUpdateWithoutStreamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GiftUpsertWithWhereUniqueWithoutStreamSessionInput = {
    where: GiftWhereUniqueInput
    update: XOR<GiftUpdateWithoutStreamSessionInput, GiftUncheckedUpdateWithoutStreamSessionInput>
    create: XOR<GiftCreateWithoutStreamSessionInput, GiftUncheckedCreateWithoutStreamSessionInput>
  }

  export type GiftUpdateWithWhereUniqueWithoutStreamSessionInput = {
    where: GiftWhereUniqueInput
    data: XOR<GiftUpdateWithoutStreamSessionInput, GiftUncheckedUpdateWithoutStreamSessionInput>
  }

  export type GiftUpdateManyWithWhereWithoutStreamSessionInput = {
    where: GiftScalarWhereInput
    data: XOR<GiftUpdateManyMutationInput, GiftUncheckedUpdateManyWithoutStreamSessionInput>
  }

  export type UserCreateWithoutStreamerMetricsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamerMetricsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamerMetricsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamerMetricsInput, UserUncheckedCreateWithoutStreamerMetricsInput>
  }

  export type UserUpsertWithoutStreamerMetricsInput = {
    update: XOR<UserUpdateWithoutStreamerMetricsInput, UserUncheckedUpdateWithoutStreamerMetricsInput>
    create: XOR<UserCreateWithoutStreamerMetricsInput, UserUncheckedCreateWithoutStreamerMetricsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamerMetricsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamerMetricsInput, UserUncheckedUpdateWithoutStreamerMetricsInput>
  }

  export type UserUpdateWithoutStreamerMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamerMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAudienceLevelsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAudienceLevelsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAudienceLevelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAudienceLevelsInput, UserUncheckedCreateWithoutAudienceLevelsInput>
  }

  export type UserUpsertWithoutAudienceLevelsInput = {
    update: XOR<UserUpdateWithoutAudienceLevelsInput, UserUncheckedUpdateWithoutAudienceLevelsInput>
    create: XOR<UserCreateWithoutAudienceLevelsInput, UserUncheckedCreateWithoutAudienceLevelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAudienceLevelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAudienceLevelsInput, UserUncheckedUpdateWithoutAudienceLevelsInput>
  }

  export type UserUpdateWithoutAudienceLevelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAudienceLevelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGiftsReceivedInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGiftsReceivedInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGiftsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGiftsReceivedInput, UserUncheckedCreateWithoutGiftsReceivedInput>
  }

  export type UserCreateWithoutGiftsSentInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGiftsSentInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGiftsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGiftsSentInput, UserUncheckedCreateWithoutGiftsSentInput>
  }

  export type StreamSessionCreateWithoutGiftsInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStreamSessionsInput
  }

  export type StreamSessionUncheckedCreateWithoutGiftsInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSessionCreateOrConnectWithoutGiftsInput = {
    where: StreamSessionWhereUniqueInput
    create: XOR<StreamSessionCreateWithoutGiftsInput, StreamSessionUncheckedCreateWithoutGiftsInput>
  }

  export type UserUpsertWithoutGiftsReceivedInput = {
    update: XOR<UserUpdateWithoutGiftsReceivedInput, UserUncheckedUpdateWithoutGiftsReceivedInput>
    create: XOR<UserCreateWithoutGiftsReceivedInput, UserUncheckedCreateWithoutGiftsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGiftsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGiftsReceivedInput, UserUncheckedUpdateWithoutGiftsReceivedInput>
  }

  export type UserUpdateWithoutGiftsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGiftsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutGiftsSentInput = {
    update: XOR<UserUpdateWithoutGiftsSentInput, UserUncheckedUpdateWithoutGiftsSentInput>
    create: XOR<UserCreateWithoutGiftsSentInput, UserUncheckedCreateWithoutGiftsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGiftsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGiftsSentInput, UserUncheckedUpdateWithoutGiftsSentInput>
  }

  export type UserUpdateWithoutGiftsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGiftsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamSessionUpsertWithoutGiftsInput = {
    update: XOR<StreamSessionUpdateWithoutGiftsInput, StreamSessionUncheckedUpdateWithoutGiftsInput>
    create: XOR<StreamSessionCreateWithoutGiftsInput, StreamSessionUncheckedCreateWithoutGiftsInput>
    where?: StreamSessionWhereInput
  }

  export type StreamSessionUpdateToOneWithWhereWithoutGiftsInput = {
    where?: StreamSessionWhereInput
    data: XOR<StreamSessionUpdateWithoutGiftsInput, StreamSessionUncheckedUpdateWithoutGiftsInput>
  }

  export type StreamSessionUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreamSessionsNestedInput
  }

  export type StreamSessionUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelCreateNestedManyWithoutUserInput
    giftsReceived?: GiftCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    nombre: string
    rol: $Enums.Rol
    password: string
    contacto?: string | null
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    streamSessions?: StreamSessionUncheckedCreateNestedManyWithoutUserInput
    streamerMetrics?: StreamerMetricsUncheckedCreateNestedOneWithoutUserInput
    audienceLevels?: AudienceLevelUncheckedCreateNestedManyWithoutUserInput
    giftsReceived?: GiftUncheckedCreateNestedManyWithoutReceiverInput
    giftsSent?: GiftUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    streamSessions?: StreamSessionUncheckedUpdateManyWithoutUserNestedInput
    streamerMetrics?: StreamerMetricsUncheckedUpdateOneWithoutUserNestedInput
    audienceLevels?: AudienceLevelUncheckedUpdateManyWithoutUserNestedInput
    giftsReceived?: GiftUncheckedUpdateManyWithoutReceiverNestedInput
    giftsSent?: GiftUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type VideoCreateManyUserInput = {
    id?: number
    title: string
    url: string
    likes?: number
  }

  export type StreamSessionCreateManyUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    durationMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienceLevelCreateManyUserInput = {
    id?: string
    level?: number
    name: string
    description?: string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GiftCreateManyReceiverInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    senderId?: string | null
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftCreateManySenderInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    streamSessionId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type StreamSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUpdateManyWithoutStreamSessionNestedInput
  }

  export type StreamSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: GiftUncheckedUpdateManyWithoutStreamSessionNestedInput
  }

  export type StreamSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceLevelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewPermissions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutGiftsSentNestedInput
    streamSession?: StreamSessionUpdateOneWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutGiftsReceivedNestedInput
    streamSession?: StreamSessionUpdateOneWithoutGiftsNestedInput
  }

  export type GiftUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    streamSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftCreateManyStreamSessionInput = {
    id?: string
    name: string
    emoji: string
    coins: number
    receiverId: string
    senderId?: string | null
    message?: string | null
    quantity?: number
    createdAt?: Date | string
  }

  export type GiftUpdateWithoutStreamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutGiftsReceivedNestedInput
    sender?: UserUpdateOneWithoutGiftsSentNestedInput
  }

  export type GiftUncheckedUpdateWithoutStreamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftUncheckedUpdateManyWithoutStreamSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}