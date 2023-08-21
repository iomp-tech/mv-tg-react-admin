import React from "react";

import {
    List,
    Datagrid,
    ReferenceArrayField,
    ReferenceManyField,
    SingleFieldList,
    TextField,
    Filter,
    UrlField,
    ChipField,
    ImageField,
    BooleanField,
    TextInput,
    EditButton,
} from "react-admin";

const TimetableFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Название" source="title" alwaysOn />
    </Filter>
);

const TimetableList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Расписание"
            filters={<TimetableFilter />}
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

export default TimetableList;
