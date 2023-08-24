import React from "react";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    ImageInput,
    BooleanInput,
    required,
    ArrayInput,
    SimpleFormIterator,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import RichTextInput from "ra-input-rich-text";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const CoursesEdit = (props) => {
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
                                    label="ID Товара на АВО"
                                    validate={[required()]}
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

                                <TextInput
                                    source="master"
                                    label="Автор"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />

                                <TextInput
                                    source="price"
                                    label="Цена"
                                    style={defaultStyle}
                                    multiline
                                />

                                <TextInput
                                    source="btnText"
                                    label="Текст кнопки на главном экране"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />

                                <TextInput
                                    source="formTitle"
                                    label="Заголовок Формы"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />

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
                                    style={defaultStyle}>
                                    <PreviewImage source="src" />
                                </ImageInput>

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

                                <BooleanInput
                                    label="Демо уроки"
                                    source="isDemo"
                                    style={defaultStyle}
                                />

                                {formData.isDemo ? (
                                    <>
                                        <TextInput
                                            source="idAwoDemo"
                                            label="ID Товара на АВО"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <TextInput
                                            source="categoryDemo"
                                            label="Категория"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <TextInput
                                            source="btnTextDemo"
                                            label="Текст Кнопки"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <TextInput
                                            source="titleDemo"
                                            label="Название"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <div style={defaultStyle}>
                                            <RichTextInput
                                                source="descriptionDemo"
                                                label="Описание"
                                                validate={[required()]}
                                                multiline
                                            />
                                        </div>
                                        <TextInput
                                            source="masterDemo"
                                            label="Автор"
                                            validate={[required()]}
                                            style={defaultStyle}
                                            multiline
                                        />
                                        <TextInput
                                            source="priceDemo"
                                            label="Цена"
                                            style={defaultStyle}
                                            multiline
                                        />
                                        <ImageInput
                                            source="imageDemo"
                                            label="Изображение (максимальный размер 5МБ)"
                                            maxSize="5000000"
                                            accept="image/*"
                                            placeholder={
                                                <p>Перетащите файл сюда</p>
                                            }
                                            validate={[required()]}
                                            style={defaultStyle}>
                                            <PreviewImage source="src" />
                                        </ImageInput>

                                        <h3 style={{fontFamily: "sans-serif"}}>
                                            Страница Спасибо
                                        </h3>

                                        <TextInput
                                            source="thankPageTitleDemo"
                                            label="Заголовок"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />

                                        <RichTextInput
                                            source="thankPageDescriptionDemo"
                                            label="Описание"
                                            validate={[required()]}
                                            style={defaultStyle}
                                            multiline
                                        />
                                    </>
                                ) : null}

                                <TextInput
                                    source="programm.title"
                                    label="Заголовок Блока `Программа курса`"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
								
								<RichTextInput
                                    source="programm.description"
                                    label="Описание"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />

                                <ArrayInput
                                    source="programm.items"
                                    label="Элементы Блока `Программа курса`"
                                    style={defaultStyle}
                                    validate={[required()]}>
                                    <SimpleFormIterator>
                                        <TextInput
                                            label="Подзаголовок"
                                            source="subtitle"
                                            style={defaultStyle}
                                            validate={[required()]}
                                        />
                                        <TextInput
                                            label="Заголовок"
                                            source="title"
                                            style={defaultStyle}
                                            validate={[required()]}
                                        />
										<RichTextInput
											source="description"
											label="Описание"
											validate={[required()]}
											style={defaultStyle}
											multiline
										/>
                                    </SimpleFormIterator>
                                </ArrayInput>
                            </>
                        )}
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Edit>
    );
};

export default CoursesEdit;
