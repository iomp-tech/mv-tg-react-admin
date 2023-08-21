import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    SelectInput,
    SelectArrayInput,
    BooleanInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import RichTextInput from "ra-input-rich-text";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const HeaderCreate = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <TextInput
                                    source="timetableTitle"
                                    label="Заголовок Мероприятий"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />

                                <TextInput
                                    source="courseTitle"
                                    label="Заголовок Курсов"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />
                            </>
                        )}
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Edit>
    );
};

export default HeaderCreate;
