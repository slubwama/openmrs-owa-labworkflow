export default {
  labOrderReducer: {
    orders: [],
    labTests: [],
    isLoading: false,
    error: {
      status: false,
      message: null,
    },
  },
  selectedPatient: null,
  selectedLabConcept: null,
  patients: {},
  patientReducer: {
    patient: {
      person: {
        personName: {
          givenName: '',
          familyName: '',
        },
        preferredAddress: {},
      },
      patientIdentifier: {
        identifier: '',
      },
    },
    isLoading: false,
    error: {
      status: false,
      message: null,
    },
  },
};
