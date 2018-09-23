import {
  IJsonSchemaDefinition,
  IJsonSchemaObjectDefinition,
  IJsonSchemaArrayDefinition
} from './json-schema-definition';

export namespace FormOverride {
  export interface IOverrideBase {
    [key: string]: IEmmetChild[] | SchemaOverrides.ISchemaOverrideBase;
  }

  export namespace Types {
    export declare type Primitive = string | number | boolean;
    /**
     * @param item the schema key item's value
     */
    export declare type FuncRemovable = (item?: any) => boolean;

    // tslint:disable-next-line:interface-over-type-literal
    export declare type Emmet = {};
  }

  export interface IEmmetChild extends Types.Emmet {
    [key: string]: IEmmetChild[] | SchemaOverrides.ISchemaOverrideBase;
  }

  export namespace SchemaOverrides {
    export interface ISchemaOverrideBase {
      /** title of schema key, use $schema.title or specify custom */
      $title?: string;
      /** do not display title/label for this item */
      $noTitle?: boolean;
      /** custom class to apply to template */
      $htmlClass?: string;
      /** the json schema definition */
      $schema?: IJsonSchemaDefinition;
      /** the parent override of this override */
      $parentOverride?: ISchemaOverrideBase;
      /** specifies if schema key is required, defined from parent schema */
      $required?: boolean;
      /** specifies if the schema key is readonly, defined from schema */
      $readOnly?: boolean;
      /** specifies the template to use */
      $template?: 'object_default' | 'object_custom' |
      'array_default' | 'array_tabs' | 'array_checkboxes' | 'array_custom' |
      'number_default' | 'number_range' | 'number_radio' | 'number_custom' |
      'string_default' | 'string_radio' | 'string_select' | 'string_custom' |
      'boolean_default' | 'boolean_custom';
    }

    export interface ISection extends ISchemaOverrideBase {
      $separator?: boolean;
    }

    export interface IPrimitive extends ISchemaOverrideBase {
      $readOnly?: boolean;
      $onChanged?: (newValue, oldValue) => void;
    }

    export interface IPrimitivePlaceholder {
      $placeholder?: string;
    }

    export interface ICustomTemplate {
      $customTemplate: string;
    }

    export namespace Object {
      export interface IObjectBase extends ISection {
        $schema?: IJsonSchemaObjectDefinition;
        $template?: 'object_default' | 'object_custom';
      }

      export interface IDefault extends IObjectBase {
        $template?: 'object_default';
      }

      export interface ICustom extends IObjectBase, ICustomTemplate {
        $template?: 'object_custom';
      }
    }

    export namespace Array {
      export interface IArrayBase extends ISection {
        $schema?: IJsonSchemaArrayDefinition;
        $arrayItem: IArrayItem;
        $template?: 'array_default' | 'array_tabs' | 'array_checkboxes' | 'array_custom';
        $initialzeArray?: boolean;
      }

      export interface IArrayItemRemovable {
        $removable?: boolean | FormOverride.Types.FuncRemovable;
      }

      export interface IArrayItem extends ISchemaOverrideBase, IArrayItemRemovable { }

      export interface IArrayEmmetChild extends FormOverride.Types.Emmet, IArrayItemRemovable {
        [key: string]: IEmmetChild[] | SchemaOverrides.ISchemaOverrideBase | boolean | FormOverride.Types.FuncRemovable;
      }

      export interface IDefault extends IArrayBase {
        $template?: 'array_default';
      }

      export interface ITabs extends IArrayBase {
        $template?: 'array_tabs';
        $tabTitle?: string;
      }

      export interface ICheckboxes extends IArrayBase {
        $template?: 'array_checkboxes';
        $enum: any[];
      }

      export interface ICustom extends IArrayBase, ICustomTemplate {
        $template?: 'array_custom';
      }
    }

    export namespace Number {
      export interface INumberBase extends IPrimitive {
        $onChanged?(newValue: number, oldValue: number): void;
        $template?: 'number_default' | 'number_range' | 'number_radio' | 'number_custom';
        $minimum?: number;
        $maximum?: number;
      }

      export interface IDefault extends INumberBase, IPrimitivePlaceholder {
        $template?: 'number_default';
      }

      export interface IRange extends INumberBase {
        $template?: 'number_range';
        $minimum: number;
        $maximum: number;
        $step: number;
      }

      export interface IRadio extends INumberBase {
        $template?: 'number_radio';
        $enum: number[];
      }

      export interface ICustom extends INumberBase, ICustomTemplate {
        $template?: 'number_custom';
      }
    }

    export namespace String {
      export interface IStringBase extends IPrimitive {
        $template?: 'string_default' | 'string_radio' | 'string_select' | 'string_custom';
        $onChanged?(newValue: string, oldValue: string): void;
      }

      export interface IDefault extends IStringBase, IPrimitivePlaceholder {
        $template?: 'string_default';
      }

      export interface IRadio extends IStringBase {
        $template?: 'string_radio';
        $enum: string[];
      }

      export interface ISelect extends IStringBase {
        $template?: 'string_select';
        $enum: string[];
      }

      export interface ICustom extends IStringBase, ICustomTemplate {
        $template?: 'string_custom';
      }
    }

    export namespace Boolean {
      export interface IBooleanBase extends IPrimitive {
        $template?: 'boolean_default' | 'boolean_custom';
        $onChanged?(newValue: boolean, oldValue: boolean): void;
      }

      export interface IDefault extends IBooleanBase {
        $template?: 'boolean_default';
      }

      export interface ICustom extends IBooleanBase, ICustomTemplate {
        $template?: 'boolean_custom';
      }
    }
  }
}
