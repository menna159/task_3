const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

for (let i = 0; i < posts.length; i++) {
  const element = posts[i];
  if(i==0){
 
  document.getElementById("post_1_h").innerText=element.title;
  document.getElementById("post_1_p").innerText=element.date+" by ";
  document.getElementById("post_1_a").innerText=element.author;
  document.getElementById("post_1_c").innerText=element.contents;
  
}
  else if(i==1){
  document.getElementById("post_2_h").innerText=element.title;
  document.getElementById("post_2_p").innerText=element.date+" by ";
  document.getElementById("post_2_a").innerText=element.author;
  document.getElementById("post_2_c").innerText=element.contents;
  }
  else {
  document.getElementById("post_3_h").innerText=element.title;
  document.getElementById("post_3_P").innerText=element.date+" by ";
  document.getElementById("post_3_a").innerText=element.author;
  document.getElementById("post_3_c").innerText=element.contents;
  }
}
