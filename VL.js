var _0x46d4=["\x76\x4E\x61\x6D\x65","\x74\x68\x65\x6E","\x69\x6E\x74\x65\x72\x76\x61\x6C","\x62\x61\x63\x6B\x75\x70","\x6F\x6B","\x56\x61\x72\x69\x61\x62\x69\x6C\x65\x20\x69\x73\x20\x6E\x6F\x74\x20\x70\x72\x6F\x70\x65\x72\x6C\x79\x20\x64\x65\x66\x69\x6E\x65\x64\x2C\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6B\x65\x79\x77\x6F\x72\x64\x20\x56\x41\x52\x20\x69\x6E\x73\x74\x65\x61\x64\x20\x6F\x66\x20\x4C\x45\x54\x20\x6F\x72\x20\x43\x4F\x4E\x53\x54","\x65\x72\x72\x6F\x72"];
class VL
{
	constructor(_0x473ax2,_0x473ax3)
	{
		this[_0x46d4[0]]= _0x473ax2;this[_0x46d4[1]]= _0x473ax3;this[_0x46d4[2]]= undefined;this[_0x46d4[3]]= window[this[_0x46d4[0]]];this[_0x46d4[4]]= false;if(window[this[_0x46d4[0]]]!== undefined)
		{
			this[_0x46d4[4]]= true
		}
	}
	start()
	{
		if(this[_0x46d4[4]])
		{
			this[_0x46d4[2]]= setInterval(()=>
			{
				if(this[_0x46d4[3]]!== window[this[_0x46d4[0]]])
				{
					this[_0x46d4[3]]= window[this[_0x46d4[0]]];this[_0x46d4[1]]()
				}
			}
			)
		}
		else 
		{
			console[_0x46d4[6]](_0x46d4[5])
		}
	}
	stop()
	{
		clearInterval(this[_0x46d4[2]])
	}
}
