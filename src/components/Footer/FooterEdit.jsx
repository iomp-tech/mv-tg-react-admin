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

const FooterEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <div style={defaultStyle}>
                                    <RichTextInput
                                        source="text"
                                        label="Описание"
                                        multiline
                                    />
                                </div>

                                <ImageInput
                                    source="images"
                                    label="Изображение (максимальный размер 5МБ)"
                                    maxSize="5000000"
                                    accept="image/*"
                                    placeholder={<p>Перетащите файл сюда</p>}
                                    style={defaultStyle}
                                    multiple={true}
                                >
                                    <PreviewImage source="src" />
                                </ImageInput>
                            </>
                        )}
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Edit>
    );
};

export default FooterEdit;
