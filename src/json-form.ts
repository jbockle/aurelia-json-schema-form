import { IFormOverride } from './aurelia-json-schema-form';

export const form: IFormOverride = {
  '@div.row': [
    {
      '@div.col': [
        {
          firstName: {}
        }
      ]
    },
    {
      '@div.col': [
        {
          lastName: {
            $isReadOnly: item => {
              return !item.firstName;
            }
          }
        }
      ]
    }
  ],
  'description': {
    $textarea: {
      resize: 'vertical'
    }
  },
  'foodAllergies': {
    $noSeparator: true,
    $arrayItem: {}
  },
  'enumMap': {
    $enum: new Map([['letter a', 'a'], ['letter b', 'b'], ['letter c', 'c']])
    // $altTemplate: '../../templates/bootstrap4/inputs/sft-string-select-enum.html'
  },
  'references': {
    $arrayAsTabs: true,
    $tabTitle: '${model[$index].name || \'Item \' + ($index + 1)}',
    $arrayItem: {
      $noTitle: true,
      name: {},
      relationship: {},
      email: {},
      professionalOrganizations: {
        $enum: new Map([['Jedi', 'one'], ['Sith', 'two'], ['Autobot', 'three'], ['Decepticon', 'four']]),
        $arrayItem: {}
      },
      $canRemove: item => {
        return !item.relationship;
      },
      $noSeparator: true
    }
  },
  'phoneNumbers': {
    $noEmptyArrayInitialization: true,
    $arrayItem: {
      $required: true,
      $noTitle: true,
      $isReadOnly: (model) => {
        return model === '555-867-5309';
      }
    }
  },
  'favoritePet': {},

  'averageDailyCoffeeConsumption': {
    // $step: 2
  },
  'address': {
    'street': {},
    '@div.row': [
      {
        '@div.col': [
          {
            city: {}
          }
        ]
      },
      {
        '@div.col': [
          {
            state: {
              $isReadOnly: (model) => {
                return !!model;
              }
            }
          }
        ]
      },
      {
        '@div.col': [
          {
            country: {}
          }
        ]
      },
      {
        '@div.col-2': [
          {
            zip: {
              $altTemplate: '../../templates/bootstrap4/inputs/sft-number.html'
            }
          }
        ]
      }
    ]
  },
  'termsOfService': {},
  '_element': [
    {
      elementName: 'random-number-generator',
      schemaKey: 'random'
    }
  ],
  '$noSeparator': true
};
