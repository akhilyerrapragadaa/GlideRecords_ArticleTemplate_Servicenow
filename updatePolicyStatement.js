(function executeRule(current, previous /*null when async*/) {
    var Polm2m = new GlideRecord('sn_compliance_m2m_policy_policy_statement');
    Polm2m.addQuery('content', current.sys_id);
    Polm2m.query();
    //gs.addInfoMessage(Polm2m.getRowCount());
   while(Polm2m.next()){
   var doc = Polm2m.document;
        var Pol = new GlideRecord('sn_compliance_policy');
   Pol.addQuery('sys_id', doc);
   Pol.query();
   // gs.addInfoMessage(Pol.getRowCount());
   if(Pol.next()){
   if(Pol.state == 'published'){
   Pol.state = 'review';
   Pol.update();
   }
   }
   }
   })(current, previous);
   