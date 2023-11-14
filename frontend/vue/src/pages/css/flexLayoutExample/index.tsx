import styles from './index.module.less';

export default () => {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.sidebar}>左侧固定尺寸</div>
        <div class={styles.main}>右侧响应式布局</div>
        <div class={styles.item}>右侧响应式布局2</div>
      </div>
      <h1>水平展示</h1>
      <div class={styles.row}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>水平展示相反顺序</h1>
      <div class={styles.rowReverse}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>垂直</h1>
      <div class={styles.rowColumn}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>沿主轴从开头</h1>
      <div class={styles.flexStart}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>沿主轴从末尾</h1>
      <div class={styles.flexEnd}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>沿主轴从中间</h1>
      <div class={styles.flexCenter}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>各行之间留有空白的容器内</h1>
      <div class={styles.spaceBetween}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>各行之前、之间、之后都留有空白的容器内。</h1>
      <div class={styles.spaceAround}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
      <h1>行内垂直居中</h1>
      <div class={styles.alignCenter}>
        <div style='background-color:coral;'>A</div>
        <div style='background-color:lightblue;'>B</div>
        <div style='background-color:khaki;'>C</div>
        <div style='background-color:pink;'>D</div>
        <div style='background-color:lightgrey;'>E</div>
        <div style='background-color:lightgreen;'>F</div>
      </div>
    </div>
  );
};
