import { useRef } from 'react';
import EmojiPicker from './EmojiPicker';
import styles from "./emojiSelector.module.css";


export default function EmojiPickerApp() {
	const refInput = useRef(null);
	/* function handleClick(){
        refInput.current.focus();
    }*/
	return (
		<div>
			<input className={styles.container}ref={refInput} />
			{/*        <button onClick={handleClick}>da cliclc</button>*/}
			<EmojiPicker ref={refInput} />
		</div>
	);
}
