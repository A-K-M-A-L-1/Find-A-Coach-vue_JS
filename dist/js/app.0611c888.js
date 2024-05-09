(function(){"use strict";var e={4116:function(e,t,a){var s=a(5130),o=a(973),r=a(6768),i=a(4232);const n=(0,r.Lk)("h2",null,"Interested? Reach out now!",-1);function l(e,t,a,s,o,l){const c=(0,r.g2)("base-card"),u=(0,r.g2)("base-button"),d=(0,r.g2)("router-view"),h=(0,r.g2)("base-badge");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("section",null,[(0,r.bF)(c,null,{default:(0,r.k6)((()=>[(0,r.Lk)("h2",null,(0,i.v_)(l.fullName),1),(0,r.Lk)("h3",null,"$"+(0,i.v_)(l.rate)+"/hour",1)])),_:1})]),(0,r.Lk)("section",null,[(0,r.bF)(c,null,{default:(0,r.k6)((()=>[(0,r.Lk)("header",null,[n,(0,r.bF)(u,{link:"",to:l.contactLink},{default:(0,r.k6)((()=>[(0,r.eW)("Contact")])),_:1},8,["to"])]),(0,r.bF)(d)])),_:1})]),(0,r.Lk)("section",null,[(0,r.bF)(c,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.areas,(e=>((0,r.uX)(),(0,r.Wv)(h,{key:e,type:e,title:e},null,8,["type","title"])))),128)),(0,r.Lk)("p",null,(0,i.v_)(l.description),1)])),_:1})])])}var c={props:["id"],data(){return{selectedCoach:null}},computed:{fullName(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},areas(){return this.selectedCoach.areas},rate(){return this.selectedCoach.hourlyRate},description(){return this.selectedCoach.description},contactLink(){return this.$route.path+"/"+this.id+"/contact"}},created(){this.selectedCoach=this.$store.getters["coaches/coaches"].find((e=>e.id===this.id))}},u=a(1241);const d=(0,u.A)(c,[["render",l]]);var h=d;const m={class:"controls"},p={key:0},f={key:1},k={key:2};function v(e,t,a,s,o,n){const l=(0,r.g2)("base-dialog"),c=(0,r.g2)("coach-filter"),u=(0,r.g2)("base-button"),d=(0,r.g2)("base-spinner"),h=(0,r.g2)("coach-item"),v=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(l,{show:!!o.error,title:"An error occurred!",onClose:n.handleError},{default:(0,r.k6)((()=>[(0,r.Lk)("p",null,(0,i.v_)(o.error),1)])),_:1},8,["show","onClose"]),(0,r.Lk)("section",null,[(0,r.bF)(c,{onChangeFilter:n.setFilters},null,8,["onChangeFilter"])]),(0,r.Lk)("section",null,[(0,r.bF)(v,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",m,[(0,r.bF)(u,{mode:"outline",onClick:t[0]||(t[0]=e=>n.loadCoaches(!0))},{default:(0,r.k6)((()=>[(0,r.eW)("Refresh")])),_:1}),n.isLoggedIn?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(u,{key:0,link:"",to:"/auth?redirect=register"},{default:(0,r.k6)((()=>[(0,r.eW)("Login to Register as Coach")])),_:1})),!n.isLoggedIn||n.isCoach||o.isLoading?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(u,{key:1,link:"",to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)("Register as Coach")])),_:1}))]),o.isLoading?((0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(d)])):n.hasCoaches?((0,r.uX)(),(0,r.CE)("ul",f,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.filteredCoaches,(e=>((0,r.uX)(),(0,r.Wv)(h,{key:e.id,id:e.id,"first-name":e.firstName,"last-name":e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","first-name","last-name","rate","areas"])))),128))])):((0,r.uX)(),(0,r.CE)("h3",k,"No coaches found."))])),_:1})])])}const g={class:"actions"};function b(e,t,a,s,o,n){const l=(0,r.g2)("base-badge"),c=(0,r.g2)("base-button");return(0,r.uX)(),(0,r.CE)("li",null,[(0,r.Lk)("h3",null,(0,i.v_)(n.fullName),1),(0,r.Lk)("h4",null,"$"+(0,i.v_)(a.rate)+"/hour",1),(0,r.Lk)("div",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.areas,(e=>((0,r.uX)(),(0,r.Wv)(l,{key:e,type:e,title:e},null,8,["type","title"])))),128))]),(0,r.Lk)("div",g,[(0,r.bF)(c,{mode:"outline",link:"",to:n.coachContactLink},{default:(0,r.k6)((()=>[(0,r.eW)("Contact")])),_:1},8,["to"]),(0,r.bF)(c,{link:"",to:n.coachDetailsLink},{default:(0,r.k6)((()=>[(0,r.eW)("View Details")])),_:1},8,["to"])])])}var L={props:["id","firstName","lastName","rate","areas"],computed:{fullName(){return this.firstName+" "+this.lastName},coachContactLink(){return this.$route.path+"/"+this.id+"/contact"},coachDetailsLink(){return this.$route.path+"/"+this.id}}};const y=(0,u.A)(L,[["render",b],["__scopeId","data-v-6e5ce3ed"]]);var C=y;const F=e=>((0,r.Qi)("data-v-5f5d50f2"),e=e(),(0,r.jt)(),e),I=F((()=>(0,r.Lk)("h2",null,"Find Your Coach",-1))),w={class:"filter-option"},_=F((()=>(0,r.Lk)("label",{for:"frontend"},"Frontend",-1))),E={class:"filter-option"},V=F((()=>(0,r.Lk)("label",{for:"backend"},"Backend",-1))),q={class:"filter-option"},X=F((()=>(0,r.Lk)("label",{for:"career"},"Career",-1)));function A(e,t,a,s,o,i){const n=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.Wv)(n,null,{default:(0,r.k6)((()=>[I,(0,r.Lk)("span",w,[(0,r.Lk)("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[0]||(t[0]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),_]),(0,r.Lk)("span",E,[(0,r.Lk)("input",{type:"checkbox",id:"backend",checked:"",onChange:t[1]||(t[1]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),V]),(0,r.Lk)("span",q,[(0,r.Lk)("input",{type:"checkbox",id:"career",checked:"",onChange:t[2]||(t[2]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),X])])),_:1})}var $={emits:["change-filter"],data(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter(e){const t=e.target.id,a=e.target.checked,s={...this.filters,[t]:a};this.filters=s,this.$emit("change-filter",s)}}};const N=(0,u.A)($,[["render",A],["__scopeId","data-v-5f5d50f2"]]);var R=N,W={components:{CoachItem:C,CoachFilter:R},data(){return{isLoading:!1,error:null,activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{isLoggedIn(){return this.$store.getters.isAuthenticated},isCoach(){return this.$store.getters["coaches/isCoach"]},filteredCoaches(){const e=this.$store.getters["coaches/coaches"];return e.filter((e=>!(!this.activeFilters.frontend||!e.areas.includes("frontend"))||(!(!this.activeFilters.backend||!e.areas.includes("backend"))||!(!this.activeFilters.career||!e.areas.includes("career")))))},hasCoaches(){return!this.isLoading&&this.$store.getters["coaches/hasCoaches"]}},created(){this.loadCoaches()},methods:{setFilters(e){this.activeFilters=e},async loadCoaches(e=!1){this.isLoading=!0;try{await this.$store.dispatch("coaches/loadCoaches",{forceRefresh:e})}catch(t){this.error=t.message||"Something went wrong!"}this.isLoading=!1},handleError(){this.error=null}}};const x=(0,u.A)(W,[["render",v],["__scopeId","data-v-49f424ca"]]);var S=x;const U=(0,r.Lk)("h2",null,"Register as a coach now!",-1);function j(e,t,a,s,o,i){const n=(0,r.g2)("coach-form"),l=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.CE)("section",null,[(0,r.bF)(l,null,{default:(0,r.k6)((()=>[U,(0,r.bF)(n,{onSaveData:i.saveData},null,8,["onSaveData"])])),_:1})])}const Q=e=>((0,r.Qi)("data-v-1d9571bb"),e=e(),(0,r.jt)(),e),T=Q((()=>(0,r.Lk)("label",{for:"firstname"},"Firstname",-1))),D={key:0},B=Q((()=>(0,r.Lk)("label",{for:"lastname"},"Lastname",-1))),J={key:0},O=Q((()=>(0,r.Lk)("label",{for:"description"},"Description",-1))),M={key:0},P=Q((()=>(0,r.Lk)("label",{for:"rate"},"Hourly Rate",-1))),G={key:0},H=Q((()=>(0,r.Lk)("h3",null,"Areas of Expertise",-1))),K=Q((()=>(0,r.Lk)("label",{for:"frontend"},"Frontend Development",-1))),z=Q((()=>(0,r.Lk)("label",{for:"backend"},"Backend Development",-1))),Y=Q((()=>(0,r.Lk)("label",{for:"career"},"Career Advisory",-1))),Z={key:0},ee={key:0};function te(e,t,a,o,n,l){const c=(0,r.g2)("base-button");return(0,r.uX)(),(0,r.CE)("form",{onSubmit:t[14]||(t[14]=(0,s.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",{class:(0,i.C4)(["form-control",{invalid:!n.firstName.isValid}])},[T,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"firstname","onUpdate:modelValue":t[0]||(t[0]=e=>n.firstName.val=e),onBlur:t[1]||(t[1]=e=>l.clearValidity("firstName"))},null,544),[[s.Jo,n.firstName.val,void 0,{trim:!0}]]),n.firstName.isValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",D,"Firstname must not be empty."))],2),(0,r.Lk)("div",{class:(0,i.C4)(["form-control",{invalid:!n.lastName.isValid}])},[B,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"lastname","onUpdate:modelValue":t[2]||(t[2]=e=>n.lastName.val=e),onBlur:t[3]||(t[3]=e=>l.clearValidity("lastName"))},null,544),[[s.Jo,n.lastName.val,void 0,{trim:!0}]]),n.lastName.isValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",J,"Lastname must not be empty."))],2),(0,r.Lk)("div",{class:(0,i.C4)(["form-control",{invalid:!n.description.isValid}])},[O,(0,r.bo)((0,r.Lk)("textarea",{id:"description",rows:"5","onUpdate:modelValue":t[4]||(t[4]=e=>n.description.val=e),onBlur:t[5]||(t[5]=e=>l.clearValidity("description"))},null,544),[[s.Jo,n.description.val,void 0,{trim:!0}]]),n.description.isValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",M,"Description must not be empty."))],2),(0,r.Lk)("div",{class:(0,i.C4)(["form-control",{invalid:!n.rate.isValid}])},[P,(0,r.bo)((0,r.Lk)("input",{type:"number",id:"rate","onUpdate:modelValue":t[6]||(t[6]=e=>n.rate.val=e),onBlur:t[7]||(t[7]=e=>l.clearValidity("rate"))},null,544),[[s.Jo,n.rate.val,void 0,{number:!0}]]),n.rate.isValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",G,"Rate must be greater than 0."))],2),(0,r.Lk)("div",{class:(0,i.C4)(["form-control",{invalid:!n.areas.isValid}])},[H,(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox",id:"frontend",value:"frontend","onUpdate:modelValue":t[8]||(t[8]=e=>n.areas.val=e),onBlur:t[9]||(t[9]=e=>l.clearValidity("areas"))},null,544),[[s.lH,n.areas.val]]),K]),(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox",id:"backend",value:"backend","onUpdate:modelValue":t[10]||(t[10]=e=>n.areas.val=e),onBlur:t[11]||(t[11]=e=>l.clearValidity("areas"))},null,544),[[s.lH,n.areas.val]]),z]),(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox",id:"career",value:"career","onUpdate:modelValue":t[12]||(t[12]=e=>n.areas.val=e),onBlur:t[13]||(t[13]=e=>l.clearValidity("areas"))},null,544),[[s.lH,n.areas.val]]),Y]),n.areas.isValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",Z,"At least one expertise must be selected."))],2),n.formIsValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",ee,"Please fix the above errors and submit again.")),(0,r.bF)(c,null,{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})],32)}var ae={emits:["save-data"],data(){return{firstName:{val:"",isValid:!0},lastName:{val:"",isValid:!0},description:{val:"",isValid:!0},rate:{val:null,isValid:!0},areas:{val:[],isValid:!0},formIsValid:!0}},methods:{clearValidity(e){this[e].isValid=!0},validateForm(){this.formIsValid=!0,""===this.firstName.val&&(this.firstName.isValid=!1,this.formIsValid=!1),""===this.lastName.val&&(this.lastName.isValid=!1,this.formIsValid=!1),""===this.description.val&&(this.description.isValid=!1,this.formIsValid=!1),(!this.rate.val||this.rate.val<0)&&(this.rate.isValid=!1,this.formIsValid=!1),0===this.areas.val.length&&(this.areas.isValid=!1,this.formIsValid=!1)},submitForm(){if(this.validateForm(),!this.formIsValid)return;const e={first:this.firstName.val,last:this.lastName.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};this.$emit("save-data",e)}}};const se=(0,u.A)(ae,[["render",te],["__scopeId","data-v-1d9571bb"]]);var oe=se,re={components:{CoachForm:oe},methods:{saveData(e){this.$store.dispatch("coaches/registerCoach",e),this.$router.replace("/coaches")}}};const ie=(0,u.A)(re,[["render",j]]);var ne=ie;const le=e=>((0,r.Qi)("data-v-2587237c"),e=e(),(0,r.jt)(),e),ce={class:"form-control"},ue=le((()=>(0,r.Lk)("label",{for:"email"},"Your E-Mail",-1))),de={class:"form-control"},he=le((()=>(0,r.Lk)("label",{for:"message"},"Message",-1))),me={key:0,class:"errors"},pe={class:"actions"};function fe(e,t,a,o,i,n){const l=(0,r.g2)("base-button");return(0,r.uX)(),(0,r.CE)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",ce,[ue,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e)},null,512),[[s.Jo,i.email,void 0,{trim:!0}]])]),(0,r.Lk)("div",de,[he,(0,r.bo)((0,r.Lk)("textarea",{rows:"5",id:"message","onUpdate:modelValue":t[1]||(t[1]=e=>i.message=e)},null,512),[[s.Jo,i.message,void 0,{trim:!0}]])]),i.formIsValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",me,"Please enter a valid email and non-empty message.")),(0,r.Lk)("div",pe,[(0,r.bF)(l,null,{default:(0,r.k6)((()=>[(0,r.eW)("Send Message")])),_:1})])],32)}var ke={data(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}};const ve=(0,u.A)(ke,[["render",fe],["__scopeId","data-v-2587237c"]]);var ge=ve;const be=e=>((0,r.Qi)("data-v-be9e6474"),e=e(),(0,r.jt)(),e),Le=be((()=>(0,r.Lk)("header",null,[(0,r.Lk)("h2",null,"Requests Received")],-1))),ye={key:1},Ce={key:2};function Fe(e,t,a,s,o,n){const l=(0,r.g2)("base-dialog"),c=(0,r.g2)("base-spinner"),u=(0,r.g2)("request-item"),d=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(l,{show:!!o.error,title:"An error occurred!",onClose:n.handleError},{default:(0,r.k6)((()=>[(0,r.Lk)("p",null,(0,i.v_)(o.error),1)])),_:1},8,["show","onClose"]),(0,r.Lk)("section",null,[(0,r.bF)(d,null,{default:(0,r.k6)((()=>[Le,o.isLoading?((0,r.uX)(),(0,r.Wv)(c,{key:0})):n.hasRequests&&!o.isLoading?((0,r.uX)(),(0,r.CE)("ul",ye,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.receivedRequests,(e=>((0,r.uX)(),(0,r.Wv)(u,{key:e.id,email:e.userEmail,message:e.message},null,8,["email","message"])))),128))])):((0,r.uX)(),(0,r.CE)("h3",Ce,"You haven't received any requests yet!"))])),_:1})])])}const Ie=["href"];function we(e,t,a,s,o,n){return(0,r.uX)(),(0,r.CE)("li",null,[(0,r.Lk)("div",null,[(0,r.Lk)("a",{href:n.emailLink},(0,i.v_)(a.email),9,Ie)]),(0,r.Lk)("p",null,(0,i.v_)(a.message),1)])}var _e={props:["email","message"],computed:{emailLink(){return"mailto:"+this.email}}};const Ee=(0,u.A)(_e,[["render",we],["__scopeId","data-v-60554d41"]]);var Ve=Ee,qe={components:{RequestItem:Ve},data(){return{isLoading:!1,error:null}},computed:{receivedRequests(){return this.$store.getters["requests/requests"]},hasRequests(){return this.$store.getters["requests/hasRequests"]}},created(){this.loadRequests()},methods:{async loadRequests(){this.isLoading=!0;try{await this.$store.dispatch("requests/fetchRequests")}catch(e){this.error=e.message||"Something failed!"}this.isLoading=!1},handleError(){this.error=null}}};const Xe=(0,u.A)(qe,[["render",Fe],["__scopeId","data-v-be9e6474"]]);var Ae=Xe;const $e=(0,r.Lk)("h2",null,"Page not found",-1);function Ne(e,t){const a=(0,r.g2)("router-link"),s=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.CE)("section",null,[(0,r.bF)(s,null,{default:(0,r.k6)((()=>[$e,(0,r.Lk)("p",null,[(0,r.eW)(" This page could not be found - maybe check out all our "),(0,r.bF)(a,{to:"/coaches"},{default:(0,r.k6)((()=>[(0,r.eW)("coaches")])),_:1}),(0,r.eW)(". ")])])),_:1})])}const Re={},We=(0,u.A)(Re,[["render",Ne]]);var xe=We;const Se=e=>((0,r.Qi)("data-v-32d3a62a"),e=e(),(0,r.jt)(),e),Ue={class:"form-control"},je=Se((()=>(0,r.Lk)("label",{for:"email"},"E-Mail",-1))),Qe={class:"form-control"},Te=Se((()=>(0,r.Lk)("label",{for:"password"},"Password",-1))),De={key:0};function Be(e,t,a,o,n,l){const c=(0,r.g2)("base-dialog"),u=(0,r.g2)("base-spinner"),d=(0,r.g2)("base-button"),h=(0,r.g2)("base-card");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(c,{show:!!n.error,title:"An error occurred",onClose:l.handleError},{default:(0,r.k6)((()=>[(0,r.Lk)("p",null,(0,i.v_)(n.error),1)])),_:1},8,["show","onClose"]),(0,r.bF)(c,{show:n.isLoading,title:"Authenticating...",fixed:""},{default:(0,r.k6)((()=>[(0,r.bF)(u)])),_:1},8,["show"]),(0,r.bF)(h,null,{default:(0,r.k6)((()=>[(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",Ue,[je,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>n.email=e)},null,512),[[s.Jo,n.email,void 0,{trim:!0}]])]),(0,r.Lk)("div",Qe,[Te,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e)},null,512),[[s.Jo,n.password,void 0,{trim:!0}]])]),n.formIsValid?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("p",De,"Please enter a valid email and password (must be at least 6 characters long).")),(0,r.bF)(d,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,i.v_)(l.submitButtonCaption),1)])),_:1}),(0,r.bF)(d,{type:"button",mode:"flat",onClick:l.switchAuthMode},{default:(0,r.k6)((()=>[(0,r.eW)((0,i.v_)(l.switchModeButtonCaption),1)])),_:1},8,["onClick"])],32)])),_:1})])}var Je={data(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption(){return"login"===this.mode?"Login":"Signup"},switchModeButtonCaption(){return"login"===this.mode?"Signup instead":"Login instead"}},methods:{async submitForm(){if(this.formIsValid=!0,""===this.email||!this.email.includes("@")||this.password.length<6)return void(this.formIsValid=!1);this.isLoading=!0;const e={email:this.email,password:this.password};try{"login"===this.mode?await this.$store.dispatch("login",e):await this.$store.dispatch("signup",e);const t="/"+(this.$route.query.redirect||"coaches");this.$router.replace(t)}catch(t){this.error=t.message||"Failed to authenticate, try later."}this.isLoading=!1},switchAuthMode(){"login"===this.mode?this.mode="signup":this.mode="login"},handleError(){this.error=null}}};const Oe=(0,u.A)(Je,[["render",Be],["__scopeId","data-v-32d3a62a"]]);var Me=Oe,Pe=a(782),Ge=(a(4114),{registerCoach(e,t){e.coaches.push(t)},setCoaches(e,t){e.coaches=t},setFetchTimestamp(e){e.lastFetch=(new Date).getTime()}}),He={async registerCoach(e,t){const a=e.rootGetters.userId,s={firstName:t.first,lastName:t.last,description:t.desc,hourlyRate:t.rate,areas:t.areas},o=e.rootGetters.token,r=await fetch(`https://hello-world-vue-3c3f1-default-rtdb.firebaseio.com/coaches/${a}.json?auth=`+o,{method:"PUT",body:JSON.stringify(s)});r.ok,e.commit("registerCoach",{...s,id:a})},async loadCoaches(e,t){if(!t.forceRefresh&&!e.getters.shouldUpdate)return;const a=await fetch("https://hello-world-vue-3c3f1-default-rtdb.firebaseio.com/coaches.json"),s=await a.json();if(!a.ok){const e=new Error(s.message||"Failed to fetch!");throw e}const o=[];for(const r in s){const e={id:r,firstName:s[r].firstName,lastName:s[r].lastName,description:s[r].description,hourlyRate:s[r].hourlyRate,areas:s[r].areas};o.push(e)}e.commit("setCoaches",o),e.commit("setFetchTimestamp")}},Ke={coaches(e){return e.coaches},hasCoaches(e){return e.coaches&&e.coaches.length>0},isCoach(e,t,a,s){const o=t.coaches,r=s.userId;return o.some((e=>e.id===r))},shouldUpdate(e){const t=e.lastFetch;if(!t)return!0;const a=(new Date).getTime();return(a-t)/1e3>60}},ze={namespaced:!0,state(){return{lastFetch:null,coaches:[{id:"c1",firstName:"Maximilian",lastName:"Schwarzmüller",areas:["frontend","backend","career"],description:"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",hourlyRate:30},{id:"c2",firstName:"Julie",lastName:"Jones",areas:["frontend","career"],description:"I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",hourlyRate:30}]}},mutations:Ge,actions:He,getters:Ke},Ye={addRequest(e,t){e.requests.push(t)},setRequests(e,t){e.requests=t}},Ze={async contactCoach(e,t){const a={userEmail:t.email,message:t.message},s=await fetch(`https://hello-world-vue-3c3f1-default-rtdb.firebaseio.com/requests/${t.coachId}.json`,{method:"POST",body:JSON.stringify(a)}),o=await s.json();if(!s.ok){const e=new Error(o.message||"Failed to send request.");throw e}a.id=o.name,a.coachId=t.coachId,e.commit("addRequest",a)},async fetchRequests(e){const t=e.rootGetters.userId,a=e.rootGetters.token,s=await fetch(`https://hello-world-vue-3c3f1-default-rtdb.firebaseio.com/requests/${t}.json?auth=`+a),o=await s.json();if(!s.ok){const e=new Error(o.message||"Failed to fetch requests.");throw e}const r=[];for(const i in o){const e={id:i,coachId:t,userEmail:o[i].userEmail,message:o[i].message};r.push(e)}e.commit("setRequests",r)}},et={requests(e,t,a,s){const o=s.userId;return e.requests.filter((e=>e.coachId===o))},hasRequests(e,t){return t.requests&&t.requests.length>0}},tt={namespaced:!0,state(){return{requests:[]}},mutations:Ye,actions:Ze,getters:et},at={setUser(e,t){e.token=t.token,e.userId=t.userId,e.didAutoLogout=!1},setAutoLogout(e){e.didAutoLogout=!0}};let st;var ot={async login(e,t){return e.dispatch("auth",{...t,mode:"login"})},async signup(e,t){return e.dispatch("auth",{...t,mode:"signup"})},async auth(e,t){const a=t.mode;let s="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvcX1HTxH56k8cqepVWJ-82IwbQ-CcdoE";"signup"===a&&(s="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvcX1HTxH56k8cqepVWJ-82IwbQ-CcdoE");const o=await fetch(s,{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})}),r=await o.json();if(!o.ok){const e=new Error(r.message||"Failed to authenticate. Check your login data.");throw e}const i=1e3*+r.expiresIn,n=(new Date).getTime()+i;localStorage.setItem("token",r.idToken),localStorage.setItem("userId",r.localId),localStorage.setItem("tokenExpiration",n),st=setTimeout((function(){e.dispatch("autoLogout")}),i),e.commit("setUser",{token:r.idToken,userId:r.localId})},tryLogin(e){const t=localStorage.getItem("token"),a=localStorage.getItem("userId"),s=localStorage.getItem("tokenExpiration"),o=+s-(new Date).getTime();o<0||(st=setTimeout((function(){e.dispatch("autoLogout")}),o),t&&a&&e.commit("setUser",{token:t,userId:a}))},logout(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("tokenExpiration"),clearTimeout(st),e.commit("setUser",{token:null,userId:null})},autoLogout(e){e.dispatch("logout"),e.commit("setAutoLogout")}},rt={userId(e){return e.userId},token(e){return e.token},isAuthenticated(e){return!!e.token},didAutoLogout(e){return e.didAutoLogout}},it={state(){return{userId:null,token:null,didAutoLogout:!1}},mutations:at,actions:ot,getters:rt};const nt=(0,Pe.y$)({modules:{coaches:ze,requests:tt,auth:it}});var lt=nt;const ct=(0,o.aE)({history:(0,o.LA)(),routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:S},{path:"/coaches/:id",component:h,props:!0,children:[{path:"contact",component:ge}]},{path:"/register",component:ne,meta:{requiresAuth:!0}},{path:"/requests",component:Ae,meta:{requiresAuth:!0}},{path:"/auth",component:Me,meta:{requiresUnauth:!0}},{path:"/:notFound(.*)",component:xe}]});ct.beforeEach((function(e,t,a){e.meta.requiresAuth&&!lt.getters.isAuthenticated?a("/auth"):e.meta.requiresUnauth&&lt.getters.isAuthenticated?a("/coaches"):a()}));var ut=ct;function dt(e,t,a,o,i,n){const l=(0,r.g2)("the-header"),c=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.bF)(c,null,{default:(0,r.k6)((e=>[(0,r.bF)(s.eB,{name:"route",mode:"out-in"},{default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.Component)))])),_:2},1024)])),_:1})],64)}const ht={key:0},mt={key:1},pt={key:2};function ft(e,t,a,s,o,i){const n=(0,r.g2)("router-link"),l=(0,r.g2)("base-button");return(0,r.uX)(),(0,r.CE)("header",null,[(0,r.Lk)("nav",null,[(0,r.Lk)("h1",null,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Find a Coach")])),_:1})]),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(n,{to:"/coaches"},{default:(0,r.k6)((()=>[(0,r.eW)("All Coaches")])),_:1})]),i.isLoggedIn?((0,r.uX)(),(0,r.CE)("li",ht,[(0,r.bF)(n,{to:"/requests"},{default:(0,r.k6)((()=>[(0,r.eW)("Requests")])),_:1})])):((0,r.uX)(),(0,r.CE)("li",mt,[(0,r.bF)(n,{to:"/auth"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})])),i.isLoggedIn?((0,r.uX)(),(0,r.CE)("li",pt,[(0,r.bF)(l,{onClick:i.logout},{default:(0,r.k6)((()=>[(0,r.eW)("Logout")])),_:1},8,["onClick"])])):(0,r.Q3)("",!0)])])])}var kt={computed:{isLoggedIn(){return this.$store.getters.isAuthenticated}},methods:{logout(){this.$store.dispatch("logout"),this.$router.replace("/coaches")}}};const vt=(0,u.A)(kt,[["render",ft],["__scopeId","data-v-6a38bc36"]]);var gt=vt,bt={components:{TheHeader:gt},computed:{didAutoLogout(){return this.$store.getters.didAutoLogout}},created(){this.$store.dispatch("tryLogin")},watch:{didAutoLogout(e,t){e&&e!==t&&this.$router.replace("/coaches")}}};const Lt=(0,u.A)(bt,[["render",dt]]);var yt=Lt;const Ct={class:"card"};function Ft(e,t){return(0,r.uX)(),(0,r.CE)("div",Ct,[(0,r.RG)(e.$slots,"default",{},void 0,!0)])}const It={},wt=(0,u.A)(It,[["render",Ft],["__scopeId","data-v-1f9750d9"]]);var _t=wt;function Et(e,t,a,s,o,n){const l=(0,r.g2)("router-link");return a.link?((0,r.uX)(),(0,r.Wv)(l,{key:1,to:a.to,class:(0,i.C4)(a.mode)},{default:(0,r.k6)((()=>[(0,r.RG)(e.$slots,"default",{},void 0,!0)])),_:3},8,["to","class"])):((0,r.uX)(),(0,r.CE)("button",{key:0,class:(0,i.C4)(a.mode)},[(0,r.RG)(e.$slots,"default",{},void 0,!0)],2))}var Vt={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};const qt=(0,u.A)(Vt,[["render",Et],["__scopeId","data-v-2b151212"]]);var Xt=qt;function At(e,t,a,s,o,n){return(0,r.uX)(),(0,r.CE)("span",{class:(0,i.C4)(["badge",a.type])},(0,i.v_)(n.text),3)}var $t={props:["type","title"],computed:{text(){return this.title.toUpperCase()}}};const Nt=(0,u.A)($t,[["render",At],["__scopeId","data-v-5de3df1c"]]);var Rt=Nt;const Wt=e=>((0,r.Qi)("data-v-5147169a"),e=e(),(0,r.jt)(),e),xt={class:"spinner"},St=Wt((()=>(0,r.Lk)("div",{class:"lds-roller"},[(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div")],-1))),Ut=[St];function jt(e,t){return(0,r.uX)(),(0,r.CE)("div",xt,Ut)}const Qt={},Tt=(0,u.A)(Qt,[["render",jt],["__scopeId","data-v-5147169a"]]);var Dt=Tt;const Bt={key:0,open:""};function Jt(e,t,a,o,n,l){const c=(0,r.g2)("base-button");return(0,r.uX)(),(0,r.Wv)(r.Im,{to:"body"},[a.show?((0,r.uX)(),(0,r.CE)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>l.tryClose&&l.tryClose(...e)),class:"backdrop"})):(0,r.Q3)("",!0),(0,r.bF)(s.eB,{name:"dialog"},{default:(0,r.k6)((()=>[a.show?((0,r.uX)(),(0,r.CE)("dialog",Bt,[(0,r.Lk)("header",null,[(0,r.RG)(e.$slots,"header",{},(()=>[(0,r.Lk)("h2",null,(0,i.v_)(a.title),1)]),!0)]),(0,r.Lk)("section",null,[(0,r.RG)(e.$slots,"default",{},void 0,!0)]),(0,r.Lk)("menu",null,[(0,r.RG)(e.$slots,"actions",{},(()=>[(0,r.bF)(c,{onClick:l.tryClose},{default:(0,r.k6)((()=>[(0,r.eW)("Close")])),_:1},8,["onClick"])]),!0)])])):(0,r.Q3)("",!0)])),_:3})])}var Ot={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose(){this.fixed||this.$emit("close")}}};const Mt=(0,u.A)(Ot,[["render",Jt],["__scopeId","data-v-26c567f8"]]);var Pt=Mt;const Gt=(0,s.Ef)(yt);Gt.use(ut),Gt.use(lt),Gt.component("base-card",_t),Gt.component("base-button",Xt),Gt.component("base-badge",Rt),Gt.component("base-spinner",Dt),Gt.component("base-dialog",Pt),Gt.mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,r){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],r=e[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var u=l(a)}for(t&&t(s);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},s=self["webpackChunkvue_practice"]=self["webpackChunkvue_practice"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(4116)}));s=a.O(s)})();
//# sourceMappingURL=app.0611c888.js.map