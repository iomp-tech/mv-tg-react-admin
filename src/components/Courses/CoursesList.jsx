import React from "react";

import {
    List,
    Datagrid,
    TextField,
    Filter,
    ImageField,
    TextInput,
    EditButton,
} from "react-admin";

const CoursesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Название" source="title" alwaysOn />
    </Filter>
);

const CoursesList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Курсы"
            filters={<CoursesFilter />}
        >
            <Datagrid>
                <EditButton />

                <ImageField
                    label="Изображение"
                    source="image"
                    src
                    sortable={false}
                />

                <TextField label="Название" source="title" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default CoursesList;
