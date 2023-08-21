import React from "react";
import { Resource, Admin } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import authProvider from './authProvider';

import myDataProvider from './myDataProvider';

import { Login } from './page';

import { MyLayout, TimetableList, TimetableCreate, TimetableEdit, CoursesList, CoursesCreate, CoursesEdit, FooterList, FooterCreate, FooterEdit, HeaderList, HeaderCreate, HeaderEdit } from './components';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const App = () => (
	<Admin i18nProvider={i18nProvider} loginPage={Login} authProvider={authProvider} dataProvider={myDataProvider} appLayout={MyLayout}>

		<Resource name="timetable" list={TimetableList} create={TimetableCreate} edit={TimetableEdit} options={{ label: 'Расписание', menu: "A" }} />
		<Resource name="courses" list={CoursesList} create={CoursesCreate} edit={CoursesEdit} options={{ label: 'Курсы', menu: "B" }} />

		<Resource name="footer" list={FooterList} create={FooterCreate} edit={FooterEdit} options={{ label: 'Политика / Футер', menu: "C" }} />
		<Resource name="header" list={HeaderList} create={HeaderCreate} edit={HeaderEdit} options={{ label: 'Шапка', menu: "D" }} />
	</Admin>
);

export default App;