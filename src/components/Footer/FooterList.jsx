import React from "react";
import {RichTextField} from "admin-on-rest/lib/mui/field";

import {List, Datagrid, TextField, ImageField, EditButton} from "react-admin";

const FooterList = (props) => {
    return (
        <List {...props} pagination={false} title="Политика">
            <Datagrid>
                <EditButton />

                <RichTextField label="Текст" source="text" sortable={false} />

                <ImageField
                    label="Изображение"
                    source="image"
                    src
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default FooterList;
