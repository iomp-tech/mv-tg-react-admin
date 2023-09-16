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

import {DateTimeInput} from "react-admin-date-inputs2";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const TimetableEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <BooleanInput
                                    label="Скрыто"
                                    source="isHidden"
                                    style={defaultStyle}
                                />

                                <TextInput
                                    source="idAwo"
                                    label="ID группы АВО"
                                    style={defaultStyle}
                                    type="number"
                                />

                                <TextInput
                                    source="category"
                                    label="Категория"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="title"
                                    label="Название"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />

                                <div style={defaultStyle}>
                                    <RichTextInput
                                        source="description"
                                        label="Описание"
                                        validate={[required()]}
                                        multiline
                                    />
                                </div>

                                <DateTimeInput
                                    options={{
                                        inputVariant: "outlined",
                                        clearable: true,
                                    }}
                                    source="date"
                                    label="Дата и время проведения"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />

                                <TextInput
                                    source="btnText"
                                    label="Текст кнопки на главном экране"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />

                                <BooleanInput
                                    label="Авто"
                                    source="isAuto"
                                    style={defaultStyle}
                                />
                                {formData.isAuto && (
                                    <TextInput
                                        source="prolongationAutoDay"
                                        label="На сколько дней продлевается мероприятие"
                                        validate={[required()]}
                                        style={defaultStyle}
                                        type="number"
                                    />
                                )}

                                <TextInput
                                    source="formTitle"
                                    label="Заголовок Формы"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />

                                <BooleanInput
                                    label="Редирект после отправки формы"
                                    source="isRedirect"
                                    style={defaultStyle}
                                />

                                {formData.isRedirect ? (
                                    <TextInput
                                        source="redirectUrl"
                                        label="Url для редиректа"
                                        validate={[required()]}
                                        style={defaultStyle}
                                        multiline
                                    />
                                ) : (
                                    <>
                                        <h3 style={{fontFamily: "sans-serif"}}>
                                            Страница Спасибо
                                        </h3>

                                        <TextInput
                                            source="thankPageTitle"
                                            label="Заголовок"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />

                                        <RichTextInput
                                            source="thankPageDescription"
                                            label="Описание"
                                            validate={[required()]}
                                            style={defaultStyle}
                                            multiline
                                        />
                                    </>
                                )}

                                <TextInput
                                    source="videoUrl"
                                    label="Ссылка на видео (если есть)"
                                    style={defaultStyle}
                                />

                                <ImageInput
                                    source="image"
                                    label="Изображение (максимальный размер 5МБ)"
                                    maxSize="5000000"
                                    accept="image/*"
                                    placeholder={<p>Перетащите файл сюда</p>}
                                    validate={[required()]}
                                    style={defaultStyle}
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

export default TimetableEdit;
