import { Component } from 'react';
import { getFiles } from '../../data/files';
import { FileData } from '../../data/files/type';
import FilesView from './view';

type FilesProps = {};

type FilesState = {
	files: FileData[];
	isLoading: boolean;
};

class Files extends Component<FilesProps, FilesState> {
	state: FilesState = {
		files: [],
		isLoading: true,
	};

	componentDidMount() {
		this.getFiles();
	}

	getFiles = () => {
		this.setState({ isLoading: true });
		getFiles().then((res) => {
			this.setState({ files: res, isLoading: false });
		});
	};
	render() {
		return (
			<FilesView
				files={this.state.files}
				loading={this.state.isLoading}
			/>
		);
	}
}

export default Files;
