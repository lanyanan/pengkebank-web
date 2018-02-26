import React, {Component} from 'react';
import {connect} from 'react-redux';


class Edit extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		return  <div className="edit" style={{background:"#fff"}}>
					<div className="ibox-title">
				        <h5>物业资源-项目</h5>
						<div className="nowrap pull-right">
						    <button data-open="/admin/investment/conf.html" data-title="配置修改" className="layui-btn btn-new-save"><i className="fa fa-pencil-square-o"></i> 配置</button>
						    <button data-open="/admin/investment/add.html" className="layui-btn btn-new"><i className="fa fa-plus"></i> 新建</button>
						</div>
				    </div>
					<table className="table table-striped" style={{padding:"10px",marginTop:"10px"}}>
				        <thead>
				        <tr>
				            <th>ID</th>
				            <th>名称</th>
				            <th>上级</th>
				            <th>代码</th>
				            <th>状态</th>
				            <th>面积（㎡）</th>
				            <th>楼宇数</th>
				            <th>铺位数</th>
				            <th>场地数</th>
				            <th>广告位数</th>
				            <th>单元数</th>
				            <th>地址</th>
				            <th>最近修改时间</th>
				            <th>管理</th>
				        </tr>
				        </thead>
				        <tbody>
				                <tr>
				            <td>4</td>
				            <td>广州自由人</td>
				            <td>/</td>
				            <td>2002</td>
				            <td><font color="#009688">使用中</font></td>
				            <td>130000</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td></td>
				            <td>2018-01-09 09:48:01</td>
				            <td className="text-left nowrap">
				                <a className="edit-btn" lay-event="edit" data-open="/admin/investment/edit.html?id=4" data-title="项目编辑">编辑</a>
				                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/investment/del.html?id=4">删除</a>
				            </td>
				        </tr>
				                <tr>
				            <td>3</td>
				            <td>半岛城邦易点商业</td>
				            <td>/</td>
				            <td>1001</td>
				            <td><font color="#009688">使用中</font></td>
				            <td>86000</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>蛇口</td>
				            <td>2018-01-09 09:47:03</td>
				            <td className="text-left nowrap">
				                <a className="edit-btn" lay-event="edit" data-open="/admin/investment/edit.html?id=3" data-title="项目编辑">编辑</a>
				                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/investment/del.html?id=3">删除</a>
				            </td>
				        </tr>
				                <tr>
				            <td>2</td>
				            <td>coco part</td>
				            <td>xxx购物中心</td>
				            <td>00302</td>
				            <td><font color="#009688">使用中</font></td>
				            <td>23222.23</td>
				            <td>1</td>
				            <td>1</td>
				            <td>1</td>
				            <td>1</td>
				            <td>1</td>
				            <td>ab大厦33a</td>
				            <td>2018-01-03 16:40:29</td>
				            <td className="text-left nowrap">
				                <a className="edit-btn" lay-event="edit" data-open="/admin/investment/edit.html?id=2" data-title="项目编辑">编辑</a>
				                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/investment/del.html?id=2">删除</a>
				            </td>
				        </tr>
				                <tr>
				            <td>1</td>
				            <td>xxx购物中心</td>
				            <td>/</td>
				            <td>0001</td>
				            <td><font color="#009688">使用中</font></td>
				            <td>234.12</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>0</td>
				            <td>aaaabbe</td>
				            <td>2017-12-28 11:43:48</td>
				            <td className="text-left nowrap">
				                <a className="edit-btn" lay-event="edit" data-open="/admin/investment/edit.html?id=1" data-title="项目编辑">编辑</a>
				                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/investment/del.html?id=1">删除</a>
				            </td>
				        </tr>
				        
				        </tbody>
				    </table>
				</div>
	}
}

export default Edit;
