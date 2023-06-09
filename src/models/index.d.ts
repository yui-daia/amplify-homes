import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTest1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName?: string | null;
  readonly itemCode?: string | null;
  readonly qaunty?: string | null;
  readonly detail?: string | null;
  readonly created_at?: string | null;
  readonly userId?: string | null;
  readonly checked?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTest1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName?: string | null;
  readonly itemCode?: string | null;
  readonly qaunty?: string | null;
  readonly detail?: string | null;
  readonly created_at?: string | null;
  readonly userId?: string | null;
  readonly checked?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Test1 = LazyLoading extends LazyLoadingDisabled ? EagerTest1 : LazyTest1

export declare const Test1: (new (init: ModelInit<Test1>) => Test1) & {
  copyOf(source: Test1, mutator: (draft: MutableModel<Test1>) => MutableModel<Test1> | void): Test1;
}

type EagerHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageofflower?: string | null;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Home, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageofflower?: string | null;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}