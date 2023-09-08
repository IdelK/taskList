import styles from "./emojiSelector.module.css";

export default function emojiButton({emoji,onClick}) {
    function handleClick(){
        onClick(emoji);
    }
  return (
    <button className={styles.button1} onClick={handleClick}> {emoji.Symbol} </button>
  )
}

