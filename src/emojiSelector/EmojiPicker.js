import { forwardRef, useRef,useState,useEffect } from 'react';
import { data as emojiList } from './data';
import EmojiSearch from './EmojiSearch';
import Emojibutton from './EmojiButton';
import styles from "./emojiSelector.module.css";


export function EmojiPicker(props, inputRef) {
	//si pones default da error,solo pude existir un solo default

	const [isOpen, setIsOpen] = useState(false);
	const [emojis, setEmojis] = useState([...emojiList]); 
	const containerRef = useRef(null);
	
	
useEffect(() => {
 				 window.addEventListener("click",(e)=>
				  {
					if(!containerRef.current.contains(e.target))
					{
						setIsOpen(false);
						setEmojis(emojiList);

					}
				  }                     );
    			}, 
		[]);

	function handleSearch(e) {
		const q = e.target.value.toLowerCase();

		if (!!q) {
			//si no uso el !! no se realiza la busqueda
			const search = emojiList.filter((emoji) => {
				return (
					emoji.name.toLowerCase().includes(q) ||
					emoji.keywords.toLowerCase().includes(q)
				);
			});
			setEmojis(search);
		} else {
			setEmojis(emojiList);
		}
	}
	function handleOnClickEmoji(emoji) {
		const cursorPos = inputRef.current.selectionStart;
		const text = inputRef.current.value;
		const prev = text.slice(0,cursorPos); 
		const next = text.slice(cursorPos); 
		inputRef.current.value = prev + emoji.Symbol  + next;
		inputRef.current.selectionStart = cursorPos + emoji.Symbol.length;
		inputRef.current.selectionEnd =   cursorPos + emoji.Symbol.length;
		inputRef.current.focus();
	}

	function  handleClickOpen(){setIsOpen(!isOpen);}

	return (
		
		<div ref= {containerRef}>
			<button className={styles.button2} onClick={handleClickOpen}>😃</button>
			{isOpen ? (
				<div >
					<EmojiSearch onSearch={handleSearch} />
					<div>
						{emojis.map((emoji) => (
							<Emojibutton
								key={emoji.Symbol}
								emoji={emoji}
								onClick={handleOnClickEmoji}
							/>
						))}
					</div>
				</div>
			) : (
				 " "
			)}
		</div>
		
	);
}

export default forwardRef(EmojiPicker);
//sobre el hooks useRef:sus atributos o props de los componentes padres que puedan ser utilizados por los coponentes hijos
//deben ser encpasulados y/o declarados como esta aqui
//primeramente se define el coponente con sus atributos(props, inputRef)
//luego se utilza el metodo forward que tiene como argumento el componente.
