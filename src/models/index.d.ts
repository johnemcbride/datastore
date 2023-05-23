import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerInstrumentBand = {
  readonly Band?: string | null;
  readonly Instrument?: string | null;
}

type LazyInstrumentBand = {
  readonly Band?: string | null;
  readonly Instrument?: string | null;
}

export declare type InstrumentBand = LazyLoading extends LazyLoadingDisabled ? EagerInstrumentBand : LazyInstrumentBand

export declare const InstrumentBand: (new (init: ModelInit<InstrumentBand>) => InstrumentBand)

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerEnrolment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrolment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bands?: string | null;
  readonly status?: string | null;
  readonly rate?: string | null;
  readonly term?: string | null;
  readonly bandMembershipType?: string | null;
  readonly bandDesc?: string | null;
  readonly bandRate?: number | null;
  readonly lessons?: string | null;
  readonly lessonDesc?: string | null;
  readonly lessonRate?: number | null;
  readonly stripeRef?: string | null;
  readonly total?: number | null;
  readonly giftAidConsent?: boolean | null;
  readonly paymentName?: string | null;
  readonly city?: string | null;
  readonly line1?: string | null;
  readonly line2?: string | null;
  readonly postCode?: string | null;
  readonly email?: string | null;
  readonly firstname?: string | null;
  readonly familyname?: string | null;
  readonly instrumentsPlayed?: (InstrumentBand | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEnrolment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrolment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bands?: string | null;
  readonly status?: string | null;
  readonly rate?: string | null;
  readonly term?: string | null;
  readonly bandMembershipType?: string | null;
  readonly bandDesc?: string | null;
  readonly bandRate?: number | null;
  readonly lessons?: string | null;
  readonly lessonDesc?: string | null;
  readonly lessonRate?: number | null;
  readonly stripeRef?: string | null;
  readonly total?: number | null;
  readonly giftAidConsent?: boolean | null;
  readonly paymentName?: string | null;
  readonly city?: string | null;
  readonly line1?: string | null;
  readonly line2?: string | null;
  readonly postCode?: string | null;
  readonly email?: string | null;
  readonly firstname?: string | null;
  readonly familyname?: string | null;
  readonly instrumentsPlayed?: (InstrumentBand | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Enrolment = LazyLoading extends LazyLoadingDisabled ? EagerEnrolment : LazyEnrolment

export declare const Enrolment: (new (init: ModelInit<Enrolment>) => Enrolment) & {
  copyOf(source: Enrolment, mutator: (draft: MutableModel<Enrolment>) => MutableModel<Enrolment> | void): Enrolment;
}