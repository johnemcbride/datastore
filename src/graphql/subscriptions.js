/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateEnrolment = /* GraphQL */ `
  subscription OnCreateEnrolment(
    $filter: ModelSubscriptionEnrolmentFilterInput
    $owner: String
  ) {
    onCreateEnrolment(filter: $filter, owner: $owner) {
      id
      bands
      status
      rate
      term
      bandMembershipType
      bandDesc
      bandRate
      lessons
      lessonDesc
      lessonRate
      stripeRef
      total
      giftAidConsent
      paymentName
      city
      line1
      line2
      postCode
      email
      firstname
      familyname
      instrumentsPlayed {
        Band
        Instrument
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateEnrolment = /* GraphQL */ `
  subscription OnUpdateEnrolment(
    $filter: ModelSubscriptionEnrolmentFilterInput
    $owner: String
  ) {
    onUpdateEnrolment(filter: $filter, owner: $owner) {
      id
      bands
      status
      rate
      term
      bandMembershipType
      bandDesc
      bandRate
      lessons
      lessonDesc
      lessonRate
      stripeRef
      total
      giftAidConsent
      paymentName
      city
      line1
      line2
      postCode
      email
      firstname
      familyname
      instrumentsPlayed {
        Band
        Instrument
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteEnrolment = /* GraphQL */ `
  subscription OnDeleteEnrolment(
    $filter: ModelSubscriptionEnrolmentFilterInput
    $owner: String
  ) {
    onDeleteEnrolment(filter: $filter, owner: $owner) {
      id
      bands
      status
      rate
      term
      bandMembershipType
      bandDesc
      bandRate
      lessons
      lessonDesc
      lessonRate
      stripeRef
      total
      giftAidConsent
      paymentName
      city
      line1
      line2
      postCode
      email
      firstname
      familyname
      instrumentsPlayed {
        Band
        Instrument
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
