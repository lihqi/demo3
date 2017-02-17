<template>
  <el-col :span="20" :offset="4">
    <el-button type="success" @click="dialogFormVisible = true">新建</el-button>
    <el-dialog title="新建" v-model="dialogFormVisible">
      <el-form :model="form">
  <el-form-item label="USERID" :label-width="formLabelWidth">
          <el-input v-model="form.USERID" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SORTNO" :label-width="formLabelWidth">
          <el-input v-model="form.SORTNO" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="STATUS" :label-width="formLabelWidth">
          <el-input v-model="form.STATUS" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="LASTUPDATED" :label-width="formLabelWidth">
          <el-input v-model="form.LASTUPDATED" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="LASTNAME" :label-width="formLabelWidth">
          <el-input v-model="form.LASTNAME" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="GENDER" :label-width="formLabelWidth">
          <el-input v-model="form.GENDER" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="FAX" :label-width="formLabelWidth">
          <el-input v-model="form.FAX" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SECLEVEL" :label-width="formLabelWidth">
          <el-input v-model="form.SECLEVEL" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="EMAIL" :label-width="formLabelWidth">
          <el-input v-model="form.EMAIL" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="USERNAME" :label-width="formLabelWidth">
          <el-input v-model="form.USERNAME" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="IDNO" :label-width="formLabelWidth">
          <el-input v-model="form.IDNO" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="MEMO" :label-width="formLabelWidth">
          <el-input v-model="form.MEMO" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="MOBILEPHONE" :label-width="formLabelWidth">
          <el-input v-model="form.MOBILEPHONE" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="USERTYPE" :label-width="formLabelWidth">
          <el-input v-model="form.USERTYPE" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="ADDRESS" :label-width="formLabelWidth">
          <el-input v-model="form.ADDRESS" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="USERPW" :label-width="formLabelWidth">
          <el-input v-model="form.USERPW" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="TELEPHONE" :label-width="formLabelWidth">
          <el-input v-model="form.TELEPHONE" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="USERNO" :label-width="formLabelWidth">
          <el-input v-model="form.USERNO" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="DOMAINID" :label-width="formLabelWidth">
          <el-input v-model="form.DOMAINID" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">提交</el-button>
      </div>
    </el-dialog>
    <el-button type="danger" @click="handleRemoveAll()">删除选中</el-button>
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column type="expand">
        <template scope="props">
          <p>SORTNO: {{ props.row.SORTNO }}</p>
          <p>STATUS: {{ props.row.STATUS }}</p>
          <p>LASTUPDATED: {{ props.row.LASTUPDATED }}</p>
          <p>LASTNAME: {{ props.row.LASTNAME }}</p>
          <p>GENDER: {{ props.row.GENDER }}</p>
          <p>FAX: {{ props.row.FAX }}</p>
          <p>SECLEVEL: {{ props.row.SECLEVEL }}</p>
          <p>EMAIL: {{ props.row.EMAIL }}</p>
          <p>IDNO: {{ props.row.IDNO }}</p>
          <p>MEMO: {{ props.row.MEMO }}</p>
          <p>MOBILEPHONE: {{ props.row.MOBILEPHONE }}</p>
          <p>USERTYPE: {{ props.row.USERTYPE }}</p>
          <p>ADDRESS: {{ props.row.ADDRESS }}</p>
          <p>USERPW: {{ props.row.USERPW }}</p>
          <p>TELEPHONE: {{ props.row.TELEPHONE }}</p>
          <p>USERNO: {{ props.row.USERNO }}</p>
          <p>DOMAINID: {{ props.row.DOMAINID }}</p>
        </template>
      </el-table-column>
      <el-table-column type="selection" width="50">
      </el-table-column>
      <el-table-column prop="USERID" label="USERID" width="400">
      </el-table-column>
      <el-table-column prop="USERNAME" label="USERNAME" width="400">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-dialog title="修改" v-model="dialogForm2Visible" >
            <el-form :model="detailForm">
              <el-form-item label="USERID" :label-width="formLabelWidth">
                <el-input v-model="detailForm.USERID" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="SORTNO" :label-width="formLabelWidth">
                <el-input v-model="detailForm.SORTNO" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="STATUS" :label-width="formLabelWidth">
                <el-input v-model="detailForm.STATUS" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="LASTUPDATED" :label-width="formLabelWidth">
                <el-input v-model="detailForm.LASTUPDATED" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="LASTNAME" :label-width="formLabelWidth">
                <el-input v-model="detailForm.LASTNAME" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="GENDER" :label-width="formLabelWidth">
                <el-input v-model="detailForm.GENDER" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="FAX" :label-width="formLabelWidth">
                <el-input v-model="detailForm.FAX" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="SECLEVEL" :label-width="formLabelWidth">
                <el-input v-model="detailForm.SECLEVEL" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="EMAIL" :label-width="formLabelWidth">
                <el-input v-model="detailForm.EMAIL" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item label="USERNAME" :label-width="formLabelWidth">
                <el-input v-model="detailForm.USERNAME" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="IDNO" :label-width="formLabelWidth">
                <el-input v-model="detailForm.IDNO" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="MEMO" :label-width="formLabelWidth">
                <el-input v-model="detailForm.MEMO" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="MOBILEPHONE" :label-width="formLabelWidth">
                <el-input v-model="detailForm.MOBILEPHONE" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="USERTYPE" :label-width="formLabelWidth">
                <el-input v-model="detailForm.USERTYPE" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item label="ADDRESS" :label-width="formLabelWidth">
                <el-input v-model="detailForm.ADDRESS" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="USERPW" :label-width="formLabelWidth">
                <el-input v-model="detailForm.USERPW" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="TELEPHONE" :label-width="formLabelWidth">
                <el-input v-model="detailForm.TELEPHONE" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="USERNO" :label-width="formLabelWidth">
                <el-input v-model="detailForm.USERNO" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="DOMAINID" :label-width="formLabelWidth">
                <el-input v-model="detailForm.DOMAINID" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button  @click="submit(scope.$index, scope.row)">确定</el-button>
              <el-button @click="dialogForm2Visible = false">返回</el-button>
            </div>
          </el-dialog>
          <el-button size="small" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row type="flex" justify="center">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout=" prev, pager, next" :total="10">
      </el-pagination>
    </el-row>
  </el-col>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            ID: 1,
            USERID: '44',
            SORTNO: '44',
            STATUS: '4',
            LASTUPDATED: '3',
            LASTNAME: '3',
            GENDER: '3',
            FAX: '3',
            SECLEVEL: '3',
            EMAIL: '3',
            USERNAME: '3',
            IDNO: '3',
            MEMO: '3',
            MOBILEPHONE: '3',
            USERTYPE: '3',
            ADDRESS: '3',
            USERPW: '3',
            TELEPHONE: '3',
            USERNO: '3',
            DOMAINID: '3',
          },
          {
            ID: 2,
            USERID: '4',
            SORTNO: '44',
            STATUS: '4',
            LASTUPDATED: 'd',
            LASTNAME: '3',
            GENDER: '3',
            FAX: '3',
            SECLEVEL: '3',
            EMAIL: '3',
            USERNAME: '3',
            IDNO: '3',
            MEMO: '3',
            MOBILEPHONE: '3',
            USERTYPE: '3',
            ADDRESS: '3',
            USERPW: '3',
            TELEPHONE: '3',
            USERNO: '3',
            DOMAINID: '3',
          },
          {
            ID: 3,
            USERID: '44',
            SORTNO: '44',
            STATUS: 'uj',
            LASTUPDATED: '3',
            LASTNAME: '3',
            GENDER: '3',
            FAX: '3',
            SECLEVEL: '3',
            EMAIL: '3',
            USERNAME: '3',
            IDNO: 'd',
            MEMO: '3',
            MOBILEPHONE: '3',
            USERTYPE: '3',
            ADDRESS: '3',
            USERPW: '3',
            TELEPHONE: '3',
            USERNO: '3',
            DOMAINID: '3',
          },
          {
            ID: 4,
            USERID: '44',
            SORTNO: '44',
            STATUS: '4',
            LASTUPDATED: '3',
            LASTNAME: '3',
            GENDER: '3',
            FAX: '3',
            SECLEVEL: '3',
            EMAIL: '3',
            USERNAME: '3',
            IDNO: '3',
            MEMO: '3',
            MOBILEPHONE: '3',
            USERTYPE: '3',
            ADDRESS: '3',
            USERPW: '3',
            TELEPHONE: '3',
            USERNO: '3',
            DOMAINID: '3',
          },
          {
            ID: 5,
            USERID: '44',
            SORTNO: '54',
            STATUS: '4',
            LASTUPDATED: '3',
            LASTNAME: '3',
            GENDER: '3',
            FAX: '3',
            SECLEVEL: '3',
            EMAIL: '3',
            USERNAME: '3',
            IDNO: '3',
            MEMO: '3',
            MOBILEPHONE: '3',
            USERTYPE: '3',
            ADDRESS: '3',
            USERPW: '3',
            TELEPHONE: '3',
            USERNO: '3',
            DOMAINID: '3',
          },
        ],
        multipleSelection: [],
        dialogFormVisible: false,
        dialogForm2Visible: false,
        form: {
          USERID: '',
          SORTNO: '',
          STATUS: '',
          LASTUPDATED: '',
          LASTNAME: '',
          GENDER: '',
          FAX: '',
          SECLEVEL: '',
          EMAIL: '',
          USERNAME: '',
          IDNO: '',
          MEMO: '',
          MOBILEPHONE: '',
          USERTYPE: '',
          ADDRESS: '',
          USERPW: '',
          TELEPHONE: '',
          USERNO: '',
          DOMAINID: '',
        },
        formLabelWidth: '120px',
        detailForm: {
          USERID: '',
          SORTNO: '',
          STATUS: '',
          LASTUPDATED: '',
          LASTNAME: '',
          GENDER: '',
          FAX: '',
          SECLEVEL: '',
          EMAIL: '',
          USERNAME: '',
          IDNO: '',
          MEMO: '',
          MOBILEPHONE: '',
          USERTYPE: '',
          ADDRESS: '',
          USERPW: '',
          TELEPHONE: '',
          USERNO: '',
          DOMAINID: '',
        }
      }
    },
    mounted: function () {
      this.$http.get('/asp-webapp/users/listByPage.json', {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        this.tableData = response.data
      }, function (response) {
        console.log(response)
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleRemoveAll() {
        var selected = []
        this.multipleSelection.map(function (item) {
          selected.push(item.ID)
        })
        console.log(selected);
      },
      handleAdd() {
        var vm=this;
        var data=JSON.stringify(vm.form);
        console.log(data)
        vm.$http.post('/asp-webapp/users',data)
        .then((response) => {
					console.log(response)
          this.tableData.push(response.body)
				})
        this.form = {
          ID: '',
          USERID: '',
          SORTNO: '',
          STATUS: '',
          LASTUPDATED: '',
          LASTNAME: '',
          GENDER: '',
          FAX: '',
          SECLEVEL: '',
          EMAIL: '',
          USERNAME: '',
          IDNO: '',
          MEMO: '',
          MOBILEPHONE: '',
          USERTYPE: '',
          ADDRESS: '',
          USERPW: '',
          TELEPHONE: '',
          USERNO: '',
          DOMAINID: '',
        },
          this.dialogFormVisible = false;
      },
      handleDelete(index, row) {
        this.$http.delete('/asp-webapp/users/'+row.ID)
        .then((response)=>{
          console.log(response)
        })
        console.log(row.ID)
        this.dialogFormVisible = false;
        this.tableData.splice(index, 1);
      },
      handleEdit(index, row) {
        this.dialogForm2Visible = true;
        // this.detailForm = row;
        var copy = new Object();
        for(var key in row){
          copy[key] = row[key];
        }
        this.detailForm = copy;
      },
      submit(index,row){
        this.dialogForm2Visible = false
                var vm=this;
        var data=JSON.stringify(row);
        console.log(data)
        vm.$http.put('/asp-webapp/users',data)
        .then((response) => {
					console.log(response)
          row=response.data;
				})
      },
      handleSizeChange(val) {
        console.log('ok');
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(val);
      }
    }
  }

</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>