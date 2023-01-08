import { useEffect, useState } from 'react';
import { getFiles } from '../../data/files';
import { FileData } from '../../data/files/type';
import FilesView from './view';

type Props = {};

const Files: React.FC<Props> = (): JSX.Element => {
	const [files, setFiles] = useState<FileData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setIsLoading(true);
		getFiles()
			.then((res) => {
				setFiles(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);

	return <FilesView files={files} loading={isLoading} error={error} />;
};

export default Files;
