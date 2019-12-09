(function executeRule(current, previous /*null when async*/) {
    var gr = new GlideRecord('pm_project');
    var id = current.parent;
    gr.addQuery('sys_id',id);
    gr.query();
    var sum =0;
    var count=0;
    if(gr.next())
    {
    var gr_sum= new GlideRecord('pm_project_task');
    gr_sum.addQuery('parent',gr.sys_id);
    gr_sum.addQuery('milestone', 'true');
    gr_sum.query();
    while(gr_sum.next()){
    
    sum += parseFloat(gr_sum.u_currency_type);
    
    }
    gr.u_currency_1=sum.toFixed(2);
    gr.update();
    }
    })(current, previous);
    