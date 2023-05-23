/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createEnrolment = /* GraphQL */ `
  mutation CreateEnrolment(
    $input: CreateEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    createEnrolment(input: $input, condition: $condition) {
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
export const updateEnrolment = /* GraphQL */ `
  mutation UpdateEnrolment(
    $input: UpdateEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    updateEnrolment(input: $input, condition: $condition) {
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
export const deleteEnrolment = /* GraphQL */ `
  mutation DeleteEnrolment(
    $input: DeleteEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    deleteEnrolment(input: $input, condition: $condition) {
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
