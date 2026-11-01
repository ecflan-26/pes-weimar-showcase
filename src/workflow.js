/* New educational adaptation of PES enquiry-validation concepts. No network or storage. */
(function(root){
  const offers = ['meeting','presentation','programme'];
  function validate(input){
    const value={name:String(input.name||'').trim(),goal:String(input.goal||'').trim(),offer:String(input.offer||'')};
    const errors=[];
    if(!value.name)errors.push('name');
    if(!value.goal)errors.push('goal');
    if(!offers.includes(value.offer))errors.push('offer');
    return {valid:errors.length===0,errors,value};
  }
  const api={offers,validate};
  if(typeof module!=='undefined' && module.exports)module.exports=api;
  else root.PESDemo=api;
})(typeof window!=='undefined'?window:this);
