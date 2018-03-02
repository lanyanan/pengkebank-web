import React, {Component} from 'react';
//import {connect} from 'react-redux';
import Btn from '../modules/btn';
// import TabNav from '../modules/tabBar';
import InputText from '../modules/inputText';
import Select from '../modules/select';
// import DateTime from '../modules/dateTime';
// import Radio from '../modules/radio';
//import CheckBox from '../modules/checkBox';


class OrganizationNumber extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		// console.log($('.input-user-dateTime input'))
		// $('.input-user-dateTime input').datetimepicker({format: 'yyyy-mm-dd hh:ii'});
	}
	submit() {

	}
	render() {
		let options = ["1", "2", "3", "4"];
		return  <div className="index-area">
					<div className="container-title">
						<div className="container-title-name">组织员工</div>
						<div className="container-title-btns">
							<Btn btnClassName="btn btn-user-three" btnTitle="添加" />
						</div>
					</div>
					<div className="container-tab index-area-tab">
						<div className="container-tab-search">
							<div className="container-tab-search-item">
								<label>下拉选择框</label>
								<Select ref="userSelect" domId="searchSelect" optionArr={options}/>
							</div>
							<div className="container-tab-search-item">
								<label>下拉选择框</label>
								<Select ref="userSelect1" domId="searchSelect" optionArr={options}/>
							</div>
						</div>
						<div className="container-tab-search">

							<div className="container-tab-search-item">
								<label>下拉选择框</label>
								<Select ref="userSelect2" domId="searchSelect" optionArr={options}/>
							</div>
							<div className="container-tab-search-item">
								<label>下拉选择框</label>
								<Select ref="userSelect3" domId="searchSelect" optionArr={options}/>
							</div>
						</div>
						
						<div className="container-tab-search-submit">
							<Btn btnClassName="btn btn-user-one" btnTitle="搜索" btnCallback={this.submit.bind(this)} />
						</div>
					</div>
					<div className="search-result">
						<table className="table">
					        <thead>
					        <tr>
					            <th>ID</th>
					            <th>名称</th>
					            <th>状态</th>
					            <th>编辑人</th>
					            <th>更新时间</th>
					            <th>操作</th>
					        </tr>
					        </thead>
					        <tbody>
					                <tr>
					            <td>81</td>
					            <td>213123</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-09 11:02:11</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=81">查看</a>
					                                <a className="edit-btn-block">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=81">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>68</td>
					            <td>阿斯达</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-09 11:02:32</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=68">查看</a>
					                                <a className="edit-btn-block">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=68">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>67</td>
					            <td>阿斯达</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-05 15:27:25</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=67">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=67">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=67">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>66</td>
					            <td>自行车</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-05 15:27:06</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=66">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=66">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=66">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>65</td>
					            <td>自行车</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-05 15:27:05</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=65">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=65">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=65">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>64</td>
					            <td>自行车Z</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-05 15:26:08</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=64">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=64">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=64">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>63</td>
					            <td>自行车Z</td>
					            <td>正式版本</td>
					            <td>test</td>
					            <td>2018-02-05 15:26:07</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=63">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=63">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=63">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>62</td>
					            <td>。。。</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 15:00:51</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=62">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=62">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=62">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>61</td>
					            <td>快快快</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 15:14:21</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=61">查看</a>
					                                <a className="edit-btn-block">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=61">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>60</td>
					            <td>快快快</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 15:00:04</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=60">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=60">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=60">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>59</td>
					            <td>啊啊啊</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 14:59:24</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=59">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=59">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=59">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>58</td>
					            <td>哈哈哈</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 14:58:18</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=58">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=58">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=58">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>57</td>
					            <td>123123</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 14:54:41</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=57">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=57">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=57">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>56</td>
					            <td>666</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 14:51:46</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=56">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=56">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=56">删除</a>
					            </td>
					        </tr>
					                <tr>
					            <td>53</td>
					            <td>1</td>
					            <td>正式版本</td>
					            <td>test1</td>
					            <td>2018-02-05 14:11:33</td>
					            <td className="text-left nowrap">
					                <a className="edit-btn" data-open="/admin/contract/tpl_view.html?id=53">查看</a>
					                                <a className="edit-btn" data-open="/admin/contract/tpl_edit.html?id=53">编辑</a>
					                                <a className="delect-btn" data-confirm="真的删除吗？" data-load="/admin/contract/tpl_del.html?id=53">删除</a>
					            </td>
					        </tr>
					        
					        </tbody>
					    </table>
					</div>
				</div>
	}
}

export default OrganizationNumber;