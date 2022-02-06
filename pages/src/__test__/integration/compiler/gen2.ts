import { CallParams, registerService, callFunction } from '../../../internal/compilerSupport/v2';
import { FluencePeer } from '../../../index';

/*

-- file to generate functions below from

service ServiceWithDefaultId("defaultId"):
    hello(s: string)

service ServiceWithOUTDefaultId:
    hello(s: string)

service MoreMembers:
    member1()
    member2(s1: string)
    member3(s1: string, s2: string)
    member4(s1: string, s2: string, i: i32) -> i32
    member5(s1: string, s2: string, i: i32) -> i32

func f1(callback: string, i32 -> ()):
    callback("hello, world", 42)

func f2(num: i32, callback: string, i32 -> ()):
    callback("hello, world", 42)

func f3(num: i32, callback: string, i32 -> ()) -> string:
    callback("hello, world", 42)
    <- "hello world"

func callBackZeroArgs(callback: -> ()):
    callback()

*/

/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.3.1-231
 *
 */

// Services

export interface ServiceWithDefaultIdDef {
    hello: (s: string, callParams: CallParams<'s'>) => void;
}
export function registerServiceWithDefaultId(service: ServiceWithDefaultIdDef): void;
export function registerServiceWithDefaultId(serviceId: string, service: ServiceWithDefaultIdDef): void;
export function registerServiceWithDefaultId(peer: FluencePeer, service: ServiceWithDefaultIdDef): void;
export function registerServiceWithDefaultId(
    peer: FluencePeer,
    serviceId: string,
    service: ServiceWithDefaultIdDef,
): void;

export function registerServiceWithDefaultId(...args: any) {
    registerService(args, {
        defaultServiceId: 'defaultId',
        functions: [
            {
                functionName: 'hello',
                argDefs: [
                    {
                        name: 's',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'void',
                },
            },
        ],
    });
}

export interface ServiceWithOUTDefaultIdDef {
    hello: (s: string, callParams: CallParams<'s'>) => void;
}
export function registerServiceWithOUTDefaultId(serviceId: string, service: ServiceWithOUTDefaultIdDef): void;
export function registerServiceWithOUTDefaultId(
    peer: FluencePeer,
    serviceId: string,
    service: ServiceWithOUTDefaultIdDef,
): void;

export function registerServiceWithOUTDefaultId(...args: any) {
    registerService(args, {
        defaultServiceId: null,
        functions: [
            {
                functionName: 'hello',
                argDefs: [
                    {
                        name: 's',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'void',
                },
            },
        ],
    });
}

export interface MoreMembersDef {
    member1: (callParams: CallParams<null>) => void;
    member2: (s1: string, callParams: CallParams<'s1'>) => void;
    member3: (s1: string, s2: string, callParams: CallParams<'s1' | 's2'>) => void;
    member4: (s1: string, s2: string, i: number, callParams: CallParams<'s1' | 's2' | 'i'>) => number;
    member5: (s1: string, s2: string, i: number, callParams: CallParams<'s1' | 's2' | 'i'>) => number;
}
export function registerMoreMembers(serviceId: string, service: MoreMembersDef): void;
export function registerMoreMembers(peer: FluencePeer, serviceId: string, service: MoreMembersDef): void;

export function registerMoreMembers(...args: any) {
    registerService(args, {
        defaultServiceId: null,
        functions: [
            {
                functionName: 'member1',
                argDefs: [],
                returnType: {
                    tag: 'void',
                },
            },
            {
                functionName: 'member2',
                argDefs: [
                    {
                        name: 's1',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'void',
                },
            },
            {
                functionName: 'member3',
                argDefs: [
                    {
                        name: 's1',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                    {
                        name: 's2',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'void',
                },
            },
            {
                functionName: 'member4',
                argDefs: [
                    {
                        name: 's1',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                    {
                        name: 's2',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                    {
                        name: 'i',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'primitive',
                },
            },
            {
                functionName: 'member5',
                argDefs: [
                    {
                        name: 's1',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                    {
                        name: 's2',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                    {
                        name: 'i',
                        argType: {
                            tag: 'primitive',
                        },
                    },
                ],
                returnType: {
                    tag: 'primitive',
                },
            },
        ],
    });
}

// Functions

export function f1(
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function f1(
    peer: FluencePeer,
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function f1(...args: any) {
    let script = `
                        (xor
                     (seq
                      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                      (xor
                       (call %init_peer_id% ("callbackSrv" "callback") ["hello, world" 42])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                    )
    `;
    return callFunction(
        args,
        {
            functionName: 'f1',
            returnType: {
                tag: 'void',
            },
            argDefs: [
                {
                    name: 'callback',
                    argType: {
                        tag: 'callback',
                        callback: {
                            argDefs: [
                                {
                                    name: 'arg0',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                                {
                                    name: 'arg1',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                            ],
                            returnType: {
                                tag: 'void',
                            },
                        },
                    },
                },
            ],
            names: {
                relay: '-relay-',
                getDataSrv: 'getDataSrv',
                callbackSrv: 'callbackSrv',
                responseSrv: 'callbackSrv',
                responseFnName: 'response',
                errorHandlingSrv: 'errorHandlingSrv',
                errorFnName: 'error',
            },
        },
        script,
    );
}

export function f2(
    num: number,
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function f2(
    peer: FluencePeer,
    num: number,
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function f2(...args: any) {
    let script = `
                        (xor
                     (seq
                      (seq
                       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                       (call %init_peer_id% ("getDataSrv" "num") [] num)
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "callback") ["hello, world" 42])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                    )
    `;
    return callFunction(
        args,
        {
            functionName: 'f2',
            returnType: {
                tag: 'void',
            },
            argDefs: [
                {
                    name: 'num',
                    argType: {
                        tag: 'primitive',
                    },
                },
                {
                    name: 'callback',
                    argType: {
                        tag: 'callback',
                        callback: {
                            argDefs: [
                                {
                                    name: 'arg0',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                                {
                                    name: 'arg1',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                            ],
                            returnType: {
                                tag: 'void',
                            },
                        },
                    },
                },
            ],
            names: {
                relay: '-relay-',
                getDataSrv: 'getDataSrv',
                callbackSrv: 'callbackSrv',
                responseSrv: 'callbackSrv',
                responseFnName: 'response',
                errorHandlingSrv: 'errorHandlingSrv',
                errorFnName: 'error',
            },
        },
        script,
    );
}

export function f3(
    num: number,
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<string>;
export function f3(
    peer: FluencePeer,
    num: number,
    callback: (arg0: string, arg1: number, callParams: CallParams<'arg0' | 'arg1'>) => void,
    config?: { ttl?: number },
): Promise<string>;
export function f3(...args: any) {
    let script = `
                        (xor
                     (seq
                      (seq
                       (seq
                        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                        (call %init_peer_id% ("getDataSrv" "num") [] num)
                       )
                       (xor
                        (call %init_peer_id% ("callbackSrv" "callback") ["hello, world" 42])
                        (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") ["hello world"])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction(
        args,
        {
            functionName: 'f3',
            returnType: {
                tag: 'primitive',
            },
            argDefs: [
                {
                    name: 'num',
                    argType: {
                        tag: 'primitive',
                    },
                },
                {
                    name: 'callback',
                    argType: {
                        tag: 'callback',
                        callback: {
                            argDefs: [
                                {
                                    name: 'arg0',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                                {
                                    name: 'arg1',
                                    argType: {
                                        tag: 'primitive',
                                    },
                                },
                            ],
                            returnType: {
                                tag: 'void',
                            },
                        },
                    },
                },
            ],
            names: {
                relay: '-relay-',
                getDataSrv: 'getDataSrv',
                callbackSrv: 'callbackSrv',
                responseSrv: 'callbackSrv',
                responseFnName: 'response',
                errorHandlingSrv: 'errorHandlingSrv',
                errorFnName: 'error',
            },
        },
        script,
    );
}

export function callBackZeroArgs(
    callback: (callParams: CallParams<null>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function callBackZeroArgs(
    peer: FluencePeer,
    callback: (callParams: CallParams<null>) => void,
    config?: { ttl?: number },
): Promise<void>;
export function callBackZeroArgs(...args: any) {
    let script = `
                        (xor
                     (seq
                      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                      (xor
                       (call %init_peer_id% ("callbackSrv" "callback") [])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                    )
    `;
    return callFunction(
        args,
        {
            functionName: 'callBackZeroArgs',
            returnType: {
                tag: 'void',
            },
            argDefs: [
                {
                    name: 'callback',
                    argType: {
                        tag: 'callback',
                        callback: {
                            argDefs: [],
                            returnType: {
                                tag: 'void',
                            },
                        },
                    },
                },
            ],
            names: {
                relay: '-relay-',
                getDataSrv: 'getDataSrv',
                callbackSrv: 'callbackSrv',
                responseSrv: 'callbackSrv',
                responseFnName: 'response',
                errorHandlingSrv: 'errorHandlingSrv',
                errorFnName: 'error',
            },
        },
        script,
    );
}