import React from "react";

import {
    Create,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import RichTextInput from "ra-input-rich-text";

import {defaultStyle} from "../../style";

const HeaderCreate = (props) => {
    return (
        <Create {...props} title="Новый блок">
            <SimpleForm>
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
        </Create>
    );
};

export default HeaderCreate;
