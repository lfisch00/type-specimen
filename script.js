// Add click event
document.getElementById('copy-text1').addEventListener('click', function(e){
  e.preventDefault();
  
  // Select the text
  document.getElementById('text-to-copy1').select();
  
  var copied;
  
  try
  {
      // Copy the text
      copied = document.execCommand('copy');
  } 
  catch (ex)
  {
      copied = false;  
  }
  
  if(copied)
  {
    // Display the copied text message
    document.getElementById('copied-text1').style.display = 'block';    
  }
  
});

document.getElementById('copy-text2').addEventListener('click', function(e){
  e.preventDefault();
  
  // Select the text
  document.getElementById('text-to-copy2').select();
  
  var copied;
  
  try
  {
      // Copy the text
      copied = document.execCommand('copy');
  } 
  catch (ex)
  {
      copied = false;  
  }
  
  if(copied)
  {
    // Display the copied text message
    document.getElementById('copied-text2').style.display = 'block';    
  }
  
});