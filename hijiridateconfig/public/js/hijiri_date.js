frappe.ui.form.on('Payment Entry', {
    before_save: function(frm) {
		var posting_date = new Date(frm.doc.posting_date);
		var hijiri_date = new Intl.DateTimeFormat('ar-FR-u-ca-islamic',{day:'numeric',month:'long',weekday:'long',year:'numeric'}).format(posting_date);//Date.now());
		frm.set_value('hijiri_date',hijiri_date);		
	},
	posting_date:function(frm) {
		var posting_date = new Date(frm.doc.posting_date);
		var hijiri_date = new Intl.DateTimeFormat('ar-FR-u-ca-islamic',{day:'numeric',month:'long',weekday:'long',year:'numeric'}).format(posting_date);//Date.now());
		frm.set_value('hijiri_date',hijiri_date);		
	},
});


frappe.ui.form.on('Journal Entry', {
    before_save: function(frm) {
		var posting_date = new Date(frm.doc.posting_date);
		var hijiri_date = new Intl.DateTimeFormat('ar-FR-u-ca-islamic',{day:'numeric',month:'long',weekday:'long',year:'numeric'}).format(posting_date);//Date.now());
		frm.set_value('hijiri_date',hijiri_date);		
	},
	posting_date:function(frm) {
		var posting_date = new Date(frm.doc.posting_date);
		var hijiri_date = new Intl.DateTimeFormat('ar-FR-u-ca-islamic',{day:'numeric',month:'long',weekday:'long',year:'numeric'}).format(posting_date);//Date.now());
		frm.set_value('hijiri_date',hijiri_date);		
	},
});