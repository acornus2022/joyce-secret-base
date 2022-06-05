/** @format */

import { observable, computed, makeAutoObservable, reaction } from 'mobx';
import { ENROLLMENT } from '../constants/constants';
import _ from 'lodash';

class AppStore {
	constructor() {
		makeAutoObservable(this);
	}

	// global
	@observable user;
	@observable content = ENROLLMENT;

	// student list
	@observable rawStudentData = [];
	@observable student = '';
	@observable studentId = 0;
	@observable studentList = [];
	@observable studentIdMap = {};
	@observable schedulerOption = [];
	@observable financeDropdownOptions = [];
	@observable financeSearchOptions = [];

	setContent(content) {
		this.content = content;
	}

	setUser(user) {
		this.user = user;
	}

	setStudent(student) {
		this.student = student;
	}

	setStudentId(studentId) {
		this.studentId = studentId;
	}

	setStudentList(studentList) {
		this.studentList = studentList;
	}

	setStudentIdMap(studentIdMap) {
		this.studentIdMap = studentIdMap;
	}

	setSchedulerOption(schedulerOption) {
		this.schedulerOption = schedulerOption;
	}

	setFinanceDropdownOptions(financeDropdownOptions) {
		this.financeDropdownOptions = financeDropdownOptions;
	}

	setFinanceSearchOptions(financeSearchOptions) {
		this.financeSearchOptions = financeSearchOptions;
	}

	@computed
	isLoggedIn() {
		return !!this.user;
	}

	setRawStudentData(action, data) {
		switch (action) {
			case 'set':
				this.rawStudentData = data;
				break;
			case 'add':
				this.rawStudentData.push(data);
				break;
			case 'update':
				this.rawStudentData.forEach((studentData) => {
					if (studentData.id === data.id) {
						for (const [key] of Object.entries(studentData)) {
							studentData[key] = data[key];
						}
					}
				});
				break;
			case 'remove':
				_.remove(this.rawStudentData, (n) => n.id === data.id);
				break;
			default:
				throw new Error('Wrong Action!');
		}
	}
}

const appStore = new AppStore();

// reaction(
// 	() => Object.values(appStore.user || ''),
// 	() => {
// 		collectSlideUtils.initializeData(appStore.isLoggedIn);
// 	}
// );

export default appStore;
