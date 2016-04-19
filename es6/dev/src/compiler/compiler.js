export { PLATFORM_DIRECTIVES, PLATFORM_PIPES } from 'angular2/src/core/platform_directives_and_pipes';
export * from 'angular2/src/compiler/template_ast';
export { TEMPLATE_TRANSFORMS } from 'angular2/src/compiler/template_parser';
export { CompilerConfig, RenderTypes } from './config';
export * from './compile_metadata';
export * from './offline_compiler';
export * from 'angular2/src/compiler/url_resolver';
export * from 'angular2/src/compiler/xhr';
export { ViewResolver } from './view_resolver';
export { DirectiveResolver } from './directive_resolver';
export { PipeResolver } from './pipe_resolver';
import { assertionsEnabled, CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { TemplateParser } from 'angular2/src/compiler/template_parser';
import { HtmlParser } from 'angular2/src/compiler/html_parser';
import { DirectiveNormalizer } from 'angular2/src/compiler/directive_normalizer';
import { RuntimeMetadataResolver } from 'angular2/src/compiler/runtime_metadata';
import { StyleCompiler } from 'angular2/src/compiler/style_compiler';
import { ViewCompiler } from 'angular2/src/compiler/view_compiler/view_compiler';
import { CompilerConfig } from './config';
import { Compiler } from 'angular2/src/core/linker/compiler';
import { RuntimeCompiler } from 'angular2/src/compiler/runtime_compiler';
import { ElementSchemaRegistry } from 'angular2/src/compiler/schema/element_schema_registry';
import { DomElementSchemaRegistry } from 'angular2/src/compiler/schema/dom_element_schema_registry';
import { UrlResolver, DEFAULT_PACKAGE_URL_PROVIDER } from 'angular2/src/compiler/url_resolver';
import { Parser } from './expression_parser/parser';
import { Lexer } from './expression_parser/lexer';
import { ViewResolver } from './view_resolver';
import { DirectiveResolver } from './directive_resolver';
import { PipeResolver } from './pipe_resolver';
function _createCompilerConfig() {
    return new CompilerConfig(assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
export const COMPILER_PROVIDERS = CONST_EXPR([
    Lexer,
    Parser,
    HtmlParser,
    TemplateParser,
    DirectiveNormalizer,
    RuntimeMetadataResolver,
    DEFAULT_PACKAGE_URL_PROVIDER,
    StyleCompiler,
    ViewCompiler,
    new Provider(CompilerConfig, { useFactory: _createCompilerConfig, deps: [] }),
    RuntimeCompiler,
    new Provider(Compiler, { useExisting: RuntimeCompiler }),
    DomElementSchemaRegistry,
    new Provider(ElementSchemaRegistry, { useExisting: DomElementSchemaRegistry }),
    UrlResolver,
    ViewResolver,
    DirectiveResolver,
    PipeResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUdkeEN5aTVzLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUSxtQkFBbUIsRUFBRSxjQUFjLFFBQU8saURBQWlELENBQUM7QUFDcEcsY0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxTQUFRLG1CQUFtQixRQUFPLHVDQUF1QyxDQUFDO0FBQzFFLFNBQVEsY0FBYyxFQUFFLFdBQVcsUUFBTyxVQUFVLENBQUM7QUFDckQsY0FBYyxvQkFBb0IsQ0FBQztBQUNuQyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsb0NBQW9DLENBQUM7QUFDbkQsY0FBYywyQkFBMkIsQ0FBQztBQUUxQyxTQUFRLFlBQVksUUFBTyxpQkFBaUIsQ0FBQztBQUM3QyxTQUFRLGlCQUFpQixRQUFPLHNCQUFzQixDQUFDO0FBQ3ZELFNBQVEsWUFBWSxRQUFPLGlCQUFpQixDQUFDO09BRXRDLEVBQUMsaUJBQWlCLEVBQVEsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3JFLEVBQVUsUUFBUSxFQUFDLE1BQU0sc0JBQXNCO09BQy9DLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUNBQXVDO09BQzdELEVBQUMsVUFBVSxFQUFDLE1BQU0sbUNBQW1DO09BQ3JELEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0Q0FBNEM7T0FDdkUsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdDQUF3QztPQUN2RSxFQUFDLGFBQWEsRUFBQyxNQUFNLHNDQUFzQztPQUMzRCxFQUFDLFlBQVksRUFBQyxNQUFNLG1EQUFtRDtPQUN2RSxFQUFDLGNBQWMsRUFBQyxNQUFNLFVBQVU7T0FDaEMsRUFBQyxRQUFRLEVBQUMsTUFBTSxtQ0FBbUM7T0FDbkQsRUFBQyxlQUFlLEVBQUMsTUFBTSx3Q0FBd0M7T0FDL0QsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNEQUFzRDtPQUNuRixFQUFDLHdCQUF3QixFQUFDLE1BQU0sMERBQTBEO09BQzFGLEVBQUMsV0FBVyxFQUFFLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DO09BQ3JGLEVBQUMsTUFBTSxFQUFDLE1BQU0sNEJBQTRCO09BQzFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sMkJBQTJCO09BQ3hDLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCO09BQ3JDLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0I7T0FDL0MsRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUI7QUFFNUM7SUFDRSxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7R0FHRztBQUNILE9BQU8sTUFBTSxrQkFBa0IsR0FBbUMsVUFBVSxDQUFDO0lBQzNFLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDM0UsZUFBZTtJQUNmLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUN0RCx3QkFBd0I7SUFDeEIsSUFBSSxRQUFRLENBQUMscUJBQXFCLEVBQUUsRUFBQyxXQUFXLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztJQUM1RSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtQTEFURk9STV9ESVJFQ1RJVkVTLCBQTEFURk9STV9QSVBFU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcGxhdGZvcm1fZGlyZWN0aXZlc19hbmRfcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdCc7XG5leHBvcnQge1RFTVBMQVRFX1RSQU5TRk9STVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuZXhwb3J0IHtDb21waWxlckNvbmZpZywgUmVuZGVyVHlwZXN9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL29mZmxpbmVfY29tcGlsZXInO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcblxuZXhwb3J0IHtWaWV3UmVzb2x2ZXJ9IGZyb20gJy4vdmlld19yZXNvbHZlcic7XG5leHBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5leHBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi9waXBlX3Jlc29sdmVyJztcblxuaW1wb3J0IHthc3NlcnRpb25zRW5hYmxlZCwgVHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVOb3JtYWxpemVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvZGlyZWN0aXZlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtSdW50aW1lTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3J1bnRpbWVfbWV0YWRhdGEnO1xuaW1wb3J0IHtTdHlsZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXInO1xuaW1wb3J0IHtWaWV3Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci92aWV3X2NvbXBpbGVyL3ZpZXdfY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlckNvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9jb21waWxlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtVcmxSZXNvbHZlciwgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi92aWV3X3Jlc29sdmVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL3BpcGVfcmVzb2x2ZXInO1xuXG5mdW5jdGlvbiBfY3JlYXRlQ29tcGlsZXJDb25maWcoKSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoYXNzZXJ0aW9uc0VuYWJsZWQoKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYFJ1bnRpbWVDb21waWxlcmAgYW5kIGl0cyBkZXBlbmRlbmNpZXMgdG8gdXNlIGZvclxuICogdGVtcGxhdGUgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBMZXhlcixcbiAgUGFyc2VyLFxuICBIdG1sUGFyc2VyLFxuICBUZW1wbGF0ZVBhcnNlcixcbiAgRGlyZWN0aXZlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIFZpZXdDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENvbXBpbGVyQ29uZmlnLCB7dXNlRmFjdG9yeTogX2NyZWF0ZUNvbXBpbGVyQ29uZmlnLCBkZXBzOiBbXX0pLFxuICBSdW50aW1lQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihDb21waWxlciwge3VzZUV4aXN0aW5nOiBSdW50aW1lQ29tcGlsZXJ9KSxcbiAgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICBuZXcgUHJvdmlkZXIoRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB7dXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0pLFxuICBVcmxSZXNvbHZlcixcbiAgVmlld1Jlc29sdmVyLFxuICBEaXJlY3RpdmVSZXNvbHZlcixcbiAgUGlwZVJlc29sdmVyXG5dKTtcbiJdfQ==