<template>
	<div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0 ml-3">Members</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/home">Home</router-link></li>
                    <li class="breadcrumb-item active">Members</li>
                </ol>
            </div>
        </div>

        <v-app class="px-4">
                <v-card :loading="isLoading">
                    <v-card-title>
                        <v-spacer>
                        <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
                        </v-spacer>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="users" class="elevation-1" :search="search">

                        <template v-slot:item.statusType="{ item }">
                            <div v-html="getUserStatus(item.status)"> test</div>
                        </template>

                        <template v-slot:item.action="{ item }">
                            <button class="btn btn-outline-success btn-sm"><i class="fa fa-pencil fa-fw"></i> edit</button>
                            <button class="btn btn-outline-danger btn-sm"><i class="fa fa-trash fa-fw"></i> delete</button>
                        </template>
                    </v-data-table>
                </v-card>
        </v-app>
        <i class="fa fa-male"></i>
    </div>
</template>


<script>
    import helper from '../../services/helper'
    import ClickConfirm from 'click-confirm'

    export default {
        components : { ClickConfirm },
        data() {
            return {
                isLoading: false,
                users: [],
                search: '',
                e6: [],
                headers: [
                    { text: 'First name', align: 'left', sortable: true, value: 'first_name',},
                    { text: 'Last nane', align: 'left', sortable: true, value: 'last_name' },
                    { text: 'Email', align: 'left', sortable: true, value: 'email' },
                    { text: 'Date of birth', align: 'left', sortable: true, value: 'date_of_birth' },
                    { text: 'Gender', align: 'left', sortable: true, value: 'gender' },
                    { text: 'Status', align: 'left', value: 'statusType', sortable: false, },
                    { text: 'Actions', value: 'action', sortable: false },

                ],
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {
                this.isLoading = true
                axios.get('/api/user')
                    .then((response) =>{
                        this.users = response.data;
                        this.isLoading = false
                    });
            },
            deleteUser(user){
                axios.delete('/api/user/'+user.id).then(response => {
                    toastr['success'](response.data.message);
                    this.getUsers();
                }).catch(error => {
                    toastr['error'](error.response.data.message);
                });
            },
            getUserGenderIcon(gender) {
                return gender === 'male' ? 'fa-male' : 'fa-woman';
            },
            getUserStatus(status){
                if(status === 'pending_activation')
                    return '<span class="badge badge-pill badge-warning">Pending Activation</span>';
                else if(status === 'activated')
                    return '<span class="badge badge-pill badge-success">Activated</span>';
                else if(status === 'banned')
                    return '<span class="badge badge-pill badge-danger">Banned</span>';
                else
                    return '';
            }
        },
        filters: {
            moment(date) {
                return helper.formatDate(date);
            },
            ucword(value) {
                return helper.ucword(value);
            }
        }
    }
</script>

<style>
    .v-menu__content {
        margin-left: -250px;
    }
</style>
