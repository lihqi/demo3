<template>
  <div id="app">

   
    <el-col :offset="2">
      <el-button type="success" @click="dialogFormVisible = true">新建</el-button>
      <el-dialog title="新建" v-model="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <el-input v-model="form.ID" auto-complete="off"></el-input>
          </el-form-item>
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
      <el-table :data="tableData" border @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column type="selection" width="100">
        </el-table-column>
        <el-table-column prop="ID" label="ID" width="130">
        </el-table-column>
        <el-table-column prop="USERID" label="USERID" width="120">
        </el-table-column>
        <el-table-column prop="SORTNO" label="SORTNO" width="100">
        </el-table-column>
        <el-table-column prop="STATUS" label="STATUS" width="130">
        </el-table-column>
        <el-table-column prop="LASTUPDATED" label="LASTUPDATED" width="150">
        </el-table-column>
        <el-table-column prop="LASTNAME" label="LASTNAME" width="150">
        </el-table-column>
        <el-table-column prop="GENDER" label="GENDER" width="100">
        </el-table-column>
        <el-table-column prop="FAX" label="FAX" width="100">
        </el-table-column>
        <el-table-column prop="SECLEVEL" label="SECLEVEL" width="150">
        </el-table-column>
        <el-table-column prop="EMAIL" label="EMAIL" width="100">
        </el-table-column>
        <el-table-column prop="USERNAME" label="USERNAME" width="150">
        </el-table-column>
        <el-table-column prop="IDNO" label="IDNO" width="100">
        </el-table-column>
        <el-table-column prop="MEMO" label="MEMO" width="100">
        </el-table-column>
        <el-table-column prop="MOBILEPHONE" label="MOBILEPHONE" width="150">
        </el-table-column>
        <el-table-column prop="USERTYPE" label="USERTYPE" width="150">
        </el-table-column>
        <el-table-column prop="ADDRESS" label="ADDRESS" width="150">
        </el-table-column>
        <el-table-column prop="USERPW" label="USERPW" width="150">
        </el-table-column>
        <el-table-column prop="TELEPHONE" label="TELEPHONE" width="150">
        </el-table-column>
        <el-table-column prop="USERNO" label="USERNO" width="150">
        </el-table-column>
        <el-table-column prop="DOMAINID" label="DOMAINID" width="150">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template scope="scope">
            <el-button size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-dialog title="修改" v-model="dialogForm2Visible">
              <el-form :model="detailForm">
                <el-form-item label="ID" :label-width="formLabelWidth">
                  <el-input v-model="detailForm.ID" auto-complete="off"></el-input>
                </el-form-item>
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
                <el-button @click="dialogForm2Visible = false">返回</el-button>
              </div>
            </el-dialog>
            <el-button size="small" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
        
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination>
    </el-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        dialogFormVisible: false,
        dialogForm2Visible: false,
        form: {
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
        formLabelWidth: '120px',
        detailForm: {
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
        }
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleRemoveAll() {
        var selected = []
        this.multipleSelection.map(function (item, index, arry) {
          selected.push(item.id)
        })
        console.log(selected)
      },
      handleAdd() {
        // this.form.id = this.tableData.length + 1;
        console.log(this.form)
        this.tableData.push(this.form);
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
        this.tableData.splice(index, 1);
        this.dialogFormVisible = false;
      },
      handleEdit(index, row) {
        this.dialogForm2Visible = true;
        this.detailForm = row;
      }
    }
  }

</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>