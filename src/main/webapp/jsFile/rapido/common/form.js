var common_form = function() {
	"use strict";
	
	//function to initiate jquery.inputlimiter
	//var runInputLimiter = function() {
	//	$('.limited').inputlimiter({
	//		remText: 'You only have %n character%s remaining...',
	//		remFullText: 'Stop typing! You\'re not allowed any more characters!',
	//		limitText: 'You\'re allowed to input %n character%s into this field.'
	//	});
	//};
	
	//function to initiate query.autosize
	var runAutosize = function() {
		$("textarea.autosize").autosize();
	};
	
	//function to initiate Select2
	var runSelect2 = function() {
		$(".search-select").select2({
			placeholder: "Select a State",
			allowClear: false
		});
	};
	
	//function to initiate Callback on Checkbox and RadioButton
	var runCalbackIcheck = function() {
		$('input.checkbox-callback').on('ifChecked', function(event) {
			alert('Checked');
		});
		
		$('input.checkbox-callback').on('ifUnchecked', function(event) {
			alert('Unchecked');
		});
		
		$('input.radio-callback').on('ifChecked', function(event) {
			alert('checked ' + $(this).val() + ' radio button');
		});
	};
	
	//function to initiate jquery.maskedinput
	var runMaskInput = function() {
		$.mask.definitions['~'] = '[+-]';
		$('.input-mask-date').mask('99/99/9999');
		$('.input-mask-phone').mask('(999) 999-9999');
		$('.input-mask-eyescript').mask('~9.99 ~9.99 999');
		$(".input-mask-product").mask("a*-999-a999", {
			placeholder: " ",
			completed: function() {
				alert("You typed the following: " + this.val());
			}
		});
	};
	
	//function to initiate Mask Money
	var runMaskMoney = function() {
		$(".currency").maskMoney();
	};
	
	//function to initiate bootstrap-datepicker
	var runDatePicker = function() {
		$('.date-picker').datepicker({
			autoclose: true
		});
	};
	
	//function to initiate bootstrap-timepicker
	var runTimePicker = function() {
		$('.time-picker').timepicker();
	};
	
	//function to initiate daterangepicker
	var runDateRangePicker = function() {
		$('.date-range').daterangepicker();
		$('.date-time-range').daterangepicker({
			timePicker: true,
			timePickerIncrement: 15,
			format: 'MM/DD/YYYY h:mm A'
		});
	};
	
	//function to initiate bootstrap-colorpicker
	var runColorPicker = function() {
		$('.color-picker').colorpicker({
			format: 'hex'
		});
		$('.color-picker-rgba').colorpicker({
			format: 'rgba'
		});
		$('.colorpicker-component').colorpicker();
	};
	
	//function to initiate bootstrap-colorpalette
	var runColorPalette = function() {
		$('.color-palette').colorPalette().on('selectColor', function(e) {
			$('#selected-color1').val(e.color);
		});
	};
	
	//function to initiate summernote
	var runSummerNote = function() {
		$('.summernote').each(function() {
			var _thisNote = $(this);
			$(this).summernote({
				height: 300,
				tabsize: 2,
				oninit: function() {
					if(_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
						_thisNote.code(_thisNote.attr("placeholder"));
					}
				},
				onfocus: function(e) {
					if(_thisNote.code() == _thisNote.attr("placeholder")) {
						_thisNote.code("");
					}
				},
				onblur: function(e) {
					if(_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
						_thisNote.code(_thisNote.attr("placeholder"));
					}
				}
			});
		});
	};
	
	/*
	//function to initiate ckeditor
	var runCKEditor = function() {
		CKEDITOR.disableAutoInline = true;
		$('textarea.ckeditor').ckeditor();
	};
	*/

	var runDatatableyxin = function() {
		console.log('==================================================in yxin defined js fun.==================================================');
		var dtInstance2 = $('#datatableyxin2').dataTable({
			//$('#datatableyxin2').dataTable({
			'paging':   true,  // Table pagination
			'ordering': true,  // Column ordering
			'info':     true,  // Bottom left status text
			// Text translation options
			// Note the required keywords between underscores (e.g _MENU_)
			oLanguage: {
				sSearch:      'Search all columns:',
				sLengthMenu:  '_MENU_ records per page',
				info:         'Showing page _PAGE_ of _PAGES_',
				zeroRecords:  'Nothing found - sorry',
				infoEmpty:    'No records available',
				infoFiltered: '(filtered from _MAX_ total records)'
			}
		});
//	var inputSearchClass = 'datatable_input_col_search';
//	var columnInputs = $('tfoot.'+inputSearchClass);
//		var columnInputs = $('.datatable_input_col_search');
//		// On input keyup trigger filtering
//		columnInputs
//			.keyup(function () {
//				dtInstance2.fnFilter(this.value, columnInputs.index(this));
//			});
	};

	return {
		//main function to initiate template pages
		init: function() {
			//runInputLimiter();
			//runAutosize();
			//runSelect2();
			//runMaskInput();
			//runMaskMoney();
			//runDatePicker();
			//runTimePicker();
			//runDateRangePicker();
			//runCalbackIcheck();
			//runColorPicker();
			//runColorPalette();
			//runSummerNote();
			//runCKEditor();
			console.log('==================================================in init==================================================');
			runDatatableyxin();
		}
	};
	
};
