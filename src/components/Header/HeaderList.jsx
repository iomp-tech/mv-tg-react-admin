import React from "react";
import {RichTextField} from "admin-on-rest/lib/mui/field";

import {List, Datagrid, TextField, ImageField, EditButton} from "react-admin";

const FooterList = (props) => {
    return (
        <List {...props} pagination={false} title="Политика">
            <Datagrid>
                <EditButton />

                <TextField
                    label="Заголовок Мероприятий"
                    source="timetableTitle"
                    sortable={false}
                />

                <TextField
                    label="courseTitle"
                    source="title"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default FooterList;
